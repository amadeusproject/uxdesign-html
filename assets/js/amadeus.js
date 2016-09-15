var Amadeus = {
    paths: {
        host: window.location.host,
        assets: function(path) {
            base = window.location.host + '/assets';
            if (path) {
                return base + path;
            } else {
                return base;
            }
        },
        components: function(path) {
            base = window.location.host + '/html/components';
            if (path) {
                return base + path;
            } else {
                return base;
            }
        }
    }
};