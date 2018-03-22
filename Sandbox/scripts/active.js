(function() {
    var nav = document.getElementById('nav'),
        anchor = nav.getElementsByTagName('a'),
        current = window.location.pathname;
        window.alert(anchor[0].href);
        window.alert(current[2]);
        for (var i = 0; i < anchor.length; i++) {
        	if(anchor[i].href == current) {
            anchor[i].className = "active";
        }
    }
})();