    function loadScript(e, t) {
        var a = document.createElement("script");
        a.type = "text/javascript", a.readyState ? a.onreadystatechange = function() {
            ("loaded" == a.readyState || "complete" == a.readyState) && (a.onreadystatechange = null, t())
        } : a.onload = function() {
            t()
        }, a.src = e, document.getElementsByTagName("head")[0].appendChild(a)
    }

    function loadStyle(e, t) {
        var a = document.createElement("link");
        a.rel = "stylesheet", a.readyState ? a.onreadystatechange = function() {
            ("loaded" == a.readyState || "complete" == a.readyState) && (a.onreadystatechange = null, t())
        } : a.onload = function() {
            t()
        }, a.href = e, document.getElementsByTagName("head")[0].appendChild(a)
    }
    // the lazyjs call after every thing is loaded

    var everythingLoaded = setInterval(function() {
        if (/loaded|complete/.test(document.readyState)) {
            clearInterval(everythingLoaded);
            // calling load
            loadScript("/filename.js", function() {});
                }
    }, 10);
