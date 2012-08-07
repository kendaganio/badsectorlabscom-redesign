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
    popover.fadeIn('slow')
  },function(){
    $("#popover").hide();
  });

});




