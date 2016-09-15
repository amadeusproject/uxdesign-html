/**
 * Amadeus related variables and functions
 * to use systemwide in development
 */
var Amadeus = {
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
                hostPath: Amadeus.paths.host,
                assetPath: Amadeus.paths.assets(),
                screenPath: Amadeus.paths.screens()
            });
        }, 500);
    }
};