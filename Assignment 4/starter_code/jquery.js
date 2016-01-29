$("#").click(function(event) {
  event.preventDefault();
});


 $( document ).ready(function() {
  });
// ND: Remember, the document ready function should be at the top and encompass all
// your jquery

$(".readmore").click(function(){
	$("#show-this-on-click").slideDown();
	$(".readmore").hide();
	$(".readless.hide").show();
});
// ND: So this should be slideDown, shown, then hide

$(".readless.hide").click(function(){
  $("#show-this-on-click").slideUp();
  $(".readmore").show();
  $(".readless.hide").hide();
  // ND:Here, SlideUp, hide then show

});

$(".learnmore").click(function(){
	$("#learnmoretext").slideDown();
	$(".learnmore").hide();
  // ND: Nice, you got this!
});
