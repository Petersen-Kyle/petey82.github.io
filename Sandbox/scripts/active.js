(function setActive() {
    var nav = document.getElementById('nav'),
        anchor = nav.getElementsByTagName('a'),
        current = window.location.pathname.split('/')[2];
        window.alert(current);
        for (var i = 0; i < anchor.length; i++) {
        if(anchor[i].href == current) {
        	window.alert(anchor);
            anchor[i].className = "active";
        }
    }
})();