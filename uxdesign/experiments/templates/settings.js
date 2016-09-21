/**
 * Application defauls
 */
Amadeus.default = {
    // resusable delay in millis
    delay: 500,
    // script assets
    scripts: [
        Amadeus.paths.assets('/js/vendor/w3data.js'),
        Amadeus.paths.assets('/js/vendor/jquery-3.1.0.min.js'),
        Amadeus.paths.assets('/js/vendor/jquery-ui.js'),
        Amadeus.paths.assets('/js/vendor/jquery-3.1.0.min.js'),
        Amadeus.paths.assets('/js/vendor/bootstrap.min.js'),
        Amadeus.paths.assets('/js/vendor/material.min.js'),
        Amadeus.paths.assets('/js/vendor/ripples.min.js'),
        Amadeus.paths.assets('/js/vendor/bootstrap-datepicker.js')
    ],
    // css assets
    styles: [
        window.location.protocol + '//fonts.googleapis.com/css?family=Roboto:300,400,500,700',
        window.location.protocol + '//fonts.googleapis.com/icon?family=Material+Icons',
        Amadeus.paths.assets('/css/vendor/bootstrap.min.css'),
        Amadeus.paths.assets('/css/vendor/material.min.css'),
        Amadeus.paths.assets('/css/vendor/ripples.min.css'),
        Amadeus.paths.assets('/css/vendor/font-awesome.min.css'),
        Amadeus.paths.assets('/css/vendor/datepicker.css'),
        Amadeus.paths.assets('/css/amadeus.css')
    ]
};