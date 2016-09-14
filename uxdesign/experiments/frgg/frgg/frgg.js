// Load all automatically
(function() {
    /**
     * Load file from an url and returns a string with its content
     * @param url: the url to fetch data.
     */
    load = function(url) {
        var xhr;
        if(window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if(window.ActiveXObject) {
            xhr = new ActiveXObject('Microsoft.XMLHTTP');
        } else {
            return false;
        }
        xhr.open('GET', url, false);
        if(xhr.overrideMimeType) {
            xhr.overrideMimeType('text/plain');
        }
        xhr.send(null);
        if(xhr.status == 200) {
            return xhr.responseText;
        }
        return false;
    }

    /**
     * Remove Frigga scripts after all is done
     * @param script: a list with all scripts in page to analyse
     */
    cleanup = function() {
        // remove frigga references
        var script = document.getElementsByTagName('script');
        for(i = 0; i < script.length; i++) {
            if(script[i].type == 'text/frigga') {
                parent = script[i].parentNode;
                parent.removeChild(script[i]);
            }
        }

        // remove empty divs
        var div = document.getElementsByTagName('div');
        for(i = 0; i < div.length; i++) {
            if (div[i].innerHTML == '') {
                parent = div[i].parentNode;
                parent.removeChild(div[i]);
            }
        }
    }

    /**
     * Compiles the text/frigga templates and add to page
     */
    compileTemplates = function() {
        var script = document.getElementsByTagName('script');
        var i, src = [], elem;

        // find for frigga scripts
        for(i = 0; i < script.length; i++) {
            if(script[i].type == 'text/frigga') {
                // create new element
                elem = document.createElement('div');
                parent = script[i].parentNode;
                parent.insertBefore(elem, script[i]);

                // import frigga script into
                if(script[i].src) {
                    elem.innerHTML = load(script[i].src);
                } else {
                    elem.innerHTML = script[i].innerHTML;
                }

                // put it all raw int html file in right position
                while (elem.firstChild) {
                    elem.parentNode.insertBefore(elem.firstChild, elem);
                }
            }
        }
        // clean that mess
        cleanup();
    }

    // compile
    compileTemplates();
})();