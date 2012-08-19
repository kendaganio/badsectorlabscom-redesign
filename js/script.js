/* Author:
  Ken-Lauren Daganio
*/
$(document).ready(function(){

  $("#headshots img").each(function(){
    var user = $(this).data('twitter-handle');
    $("#" + user + "-tweet").tweet({
      join_text: "auto",
      username: user,
      count: 1,
      loading_text: "loading tweets...",
      refresh_interval: 300
    });
  })

  $("#headshots img").hover(function(){
    var pos = $(this).position();
    var el = "#" + $(this).data('twitter-handle') + "-tweet";
    var popover = $(el);

    popover.css({
      left: pos.left - 110,
      top: pos.top - parseInt(popover.css('height')) - 20
    });

    popover.fadeIn('slow')
  },function(){
    $(".popover").hide();
  });
});




