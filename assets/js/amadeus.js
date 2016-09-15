var Amadeus = {
    /**
     * Path related variables and functions
     */
    paths: {
        // application host
        host: window.location.host,
        // assets path
        assets: function(path) {
            base = window.location.host + '/assets';
            if (path) {
                return base + path;
            } else {
                return base;
            }
        },
        // components path
        components: function(path) {
            base = window.location.host + '/html/components';
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
    }
};