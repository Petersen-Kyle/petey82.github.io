
$(function() {
    
    /* SET PARAMETERS */
    var change_img_time   = 5000; 
    var transition_speed  = 300;
    
    var simple_slideshow  = $("#exampleSlider"),
        listItems       = simple_slideshow.children('li'),
        listLen       = listItems.length,
        i           = 0,
    
        changeList = function () {
    
      listItems.eq(i).fadeOut(transition_speed, function () {
        i += 1;
        if (i === listLen) {
          i = 0;
        }
        listItems.eq(i).fadeIn(transition_speed);
      });

        };
    
    listItems.not(':first').hide();
    setInterval(changeList, change_img_time);
  
});

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],
    p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id))
    {js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs")