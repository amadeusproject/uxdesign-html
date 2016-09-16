/**
 * Amadeus related variables and functions
 * to use systemwide in development
 */
var Amadeus = {
    /**
     * Application defauls
     */
    default: {
        // resusable delay in millis
        delay: 500,
        // script assets
        scripts: function() {
            return [
                Amadeus.paths.assets('/js/vendor/jquery-3.1.0.min.js'),
                Amadeus.paths.assets('/js/vendor/jquery-ui.js'),
                Amadeus.paths.assets('/js/vendor/jquery-3.1.0.min.js'),
                Amadeus.paths.assets('/js/vendor/bootstrap.min.js'),
                Amadeus.paths.assets('/js/vendor/material.min.js'),
                Amadeus.paths.assets('/js/vendor/ripples.min.js')
            ];
        },
        // css assets
        styles: function() {
            return [
                'http://fonts.googleapis.com/css?family=Roboto:300,400,500,700',
                'https://fonts.googleapis.com/icon?family=Material+Icons',
                Amadeus.paths.assets('/css/vendor/bootstrap.min.css'),
                Amadeus.paths.assets('/css/vendor/material.min.css'),
                Amadeus.paths.assets('/css/vendor/ripples.min.css'),
                Amadeus.paths.assets('/css/vendor/font-awesome.min.css'),
                Amadeus.paths.assets('/css/amadeus.css')
            ];
        }
    },
    /**
     * Set up page
     */
    setup: function(callback) {
        // set environment variables
        Amadeus.setEnvVars(function() {
            // import templates
            Amadeus.importTemplates(function() {
                // set environment variables for templates
                Amadeus.setEnvVars(function() {
                    // set up the navbar
                    Amadeus.setUpNavbar(callback);
                });
            });
        });
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
        },
        // default paths
        defaults: function() {
            return {
                templatePath: Amadeus.paths.templates(),
                hostPath: Amadeus.paths.host,
                assetPath: Amadeus.paths.assets(),
                screenPath: Amadeus.paths.screens(),
                componentPath: Amadeus.paths.components(),
                controllerPath: Amadeus.paths.assets('/js/controllers')
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
        },
        /**
         * Function responsible to fetch stylesheets
         */
        loadStyle: function(url, callback) {
            // Adding the script tag to the head as suggested before
            var head = document.getElementsByTagName('head')[0];
            var style = document.createElement('link');
            style.rel = 'stylesheet';
            style.type = 'text/css';
            style.href = url;

            // Then bind the event to the callback function.
            // There are several events for cross browser compatibility.
            //style.onreadystatechange = callback;
            style.onload = callback;

            // Fire the loading
            head.appendChild(style);
        }
    },
    /**
     * Import HTML templates using w3data library 
     */
    importTemplates: function(callback) {
        w3IncludeHTML();
        if (callback) callback();
    },
    /**
     * Set location in breadcrumb
     */
    setBreadcrumb: function(inactive, active) {
        setTimeout(function() {
            w3DisplayData('breadcrumb', { 'active': active, inactive: inactive });
        }, Amadeus.default.delay);
    },
    /**
     * Set Up the system navbar
     */
    setUpNavbar: function(callback) {
        setTimeout(function() {
            w3DisplayData('navbar', Amadeus.paths.defaults());
            if (callback) callback();
        }, Amadeus.default.delay);
    },
    /**
     * Set up needed environment vars
     */
    setEnvVars: function(callback) {
        w3DisplayData('body', Amadeus.paths.defaults());
        if (callback) callback();
    },
    /**
     * Responsible to load necessary assets
     */
    load: function(callback) {
        with (Amadeus.utils) {
            progressiveLoad(Amadeus.default.scripts(), loadScript, function() {
                progressiveLoad(Amadeus.default.styles(), loadStyle, function() {
                    Amadeus.setup(callback);
                });
            });
        }
    }
};