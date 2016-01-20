$("#").click(function(event) {
  event.preventDefault();
});


 $( document ).ready(function() {
  });


$(".readmore").click(function(){
	$("#show-this-on-click").slideDown();
	$(".readmore").hide();
	$(".readless.hide").show();
});

$(".readless.hide").click(function(){
  $("#show-this-on-click").slideUp();
  $(".readmore").show();
  $(".readless.hide").hide();
  
});

$(".learnmore").click(function(){
	$("#learnmoretext").slideDown();
	$(".learnmore").hide();
});




