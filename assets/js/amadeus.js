/**
 * Amadeus related variables and functions
 * to use systemwide in development
 */
var Amadeus = {
    /**
     * Set up page
     */
    setup: function() {
        // set environment variables
        Amadeus.setEnvVars();

        // import templates
        Amadeus.importTemplates();

        // set environment variables for head
        Amadeus.setHead();

        // set up the navbar
        Amadeus.setUpNavbar();
    },
    /**
     * Path related variables and functions
     */
    paths: {
        // application host
        host: 'http://' + window.location.host,
        // assets path
        assets: function(path) {
            base = Amadeus.paths.host + '/assets';
            if (path) {
                return base + path;
            } else {
                return base;
            }
        },
        // components path
        components: function(path) {
            base = Amadeus.paths.host + '/html/components';
            if (path) {
                return base + path;
            } else {
                return base;
            }
        },
        // screens path
        screens: function(path) {
            base = Amadeus.paths.host + '/html/screens';
            if (path) {
                return base + path;
            } else {
                return base;
            }
        },
        // templates path
        templates: function(path) {
            base = Amadeus.paths.host + '/html/templates';
            if (path) {
                return base + path;
            } else {
                return base;
            }
        }
    },
    /**
     * Util funcitions
     */
    utils: {
        /**
         * Function responsible to load an Array of files in chain
         */
        progressiveLoad: function(lst, func, callback) {
            if (lst instanceof Array) {
                if (lst.length > 1) {
                    func(lst[0], function(){
                        lst.shift();
                        Amadeus.utils.progressiveLoad(lst, func, callback);
                    });
                } else if (lst.length === 1) {
                    func(lst[0], callback || function(){});
                } else {
                    callback();
                }
            } else {
                if (callback) {
                    callback();
                }
            }
        },
        /**
         * load a script into head
         */
        loadScript: function(url, callback) {
            // Adding the script tag to the head as suggested before
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = url;
            script.onload = callback;

            // Fire the loading
            head.appendChild(script);
        }
    },
    /**
     * Import HTML templates using w3data library 
     */
    importTemplates: function() {
        w3IncludeHTML();
    },
    /**
     * Set location in breadcrumb
     */
    setBreadcrumb: function(inactive, active) {
        setTimeout(function() {
            w3DisplayData('breadcrumb', { 'active': active, inactive: inactive });
        }, 500);
    },
    /**
     * Set Up the system navbar
     */
    setUpNavbar: function() {
        setTimeout(function() {
            w3DisplayData('navbar', {
                templatePath: Amadeus.paths.templates(),
                hostPath: Amadeus.paths.host,
                assetPath: Amadeus.paths.assets(),
                screenPath: Amadeus.paths.screens(),
                componentPath: Amadeus.paths.components(),
                controllerPath: Amadeus.paths.assets('/js/controllers')
            });
        }, 500);
    },
    /**
     * Set up needed environment vars for head
     */
    setHead: function() {
        setTimeout(function() {
            w3DisplayData('head', {
                templatePath: Amadeus.paths.templates(),
                hostPath: Amadeus.paths.host,
                assetPath: Amadeus.paths.assets(),
                screenPath: Amadeus.paths.screens(),
                componentPath: Amadeus.paths.components(),
                controllerPath: Amadeus.paths.assets('/js/controllers')
            });
        }, 500);
    },
    /**
     * Set up needed environment vars
     */
    setEnvVars: function() {
        w3DisplayData('body', {
            templatePath: Amadeus.paths.templates(),
            hostPath: Amadeus.paths.host,
            assetPath: Amadeus.paths.assets(),
            screenPath: Amadeus.paths.screens(),
            componentPath: Amadeus.paths.components(),
            controllerPath: Amadeus.paths.assets('/js/controllers')
        });
    }
};