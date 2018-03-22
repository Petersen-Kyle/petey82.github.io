$(document).ready(function() {
	// get current URL path and assign 'active' class
	var pathname = window.location.pathname;
	window.alert(pathname);
	$('nav > li > a[href="/' + location.pathname.split("/")[2] + '"]'.parent().addClass('active'));
})