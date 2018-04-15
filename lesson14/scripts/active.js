$(function(){
    var sPath = window.location.pathname;
    console.log(sPath);
    var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
    console.log(sPage);
    $('a[href="'+ sPage +'"]').addClass('active');
});