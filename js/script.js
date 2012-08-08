/* Author:
  Ken-Lauren Daganio
*/
$(document).ready(function(){

  $("#headshots img").hover(function(){
    var pos = $(this).position();
    var popover = $("#popover");
    popover.css({
      left: pos.left - 120,
      top: pos.top - 120
    });

    $("#popover").tweet({
      join_text: "auto",
      username: $(this).data('twitter-handle'),
      avatar_size: 48,
      count: 1,
      loading_text: "loading tweets..."
    });
    
    popover.fadeIn('slow')
  },function(){
    $("#popover").hide();
  });
});




