(function() {
    var nav = document.getElementById('nav'),
        anchor = nav.getElementsByTagName('a'),
        current = window.location.pathname.split('/');
        window.alert(anchor[2]);
        window.alert(current[9]);
        for (var i = 0; i < anchor.length; i++) {
        	if(anchor[i].href == current) {
            anchor[i].className = "active";
        }
    }
})();