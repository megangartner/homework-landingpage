$(document).ready(function() {

//array of dropdown values
var image = ["NYC", "SF", "LA", "ATX", "SYD"]
//show the selected value
var sel = document.getElementById('city-type');
//add the value in the array to the dropdown options
	for(var i = 0; i < image.length; i++){
    	$("#city-type").append("<option>"+ image[i] +"</option>");
} 
});

	
$("#city-type option").change(switchBackground);

 function switchBackground() {
 	/*return the value of city-type when changed-i'm not sure if this 
 	is supposed to grab the index number or the text value*/
 	var cityValue = $("#city-type").val();
 	//where the attribute of the data image source should be taken, but something is wrong here
 		$(cityValue).attr('data-image-src');
 		console.log(cityValue);
 		$('body').attr('class', cityValue);
 }

 function switchNYC(){
 	$('body').attr('class', 'nyc');
 }

  function switchSF(){
 	$('body').attr('class', 'sf');
 }

  function switchLA(){
 	$('body').attr('class', 'la');
 }

  function switchATX(){
 	$('body').attr('class', 'austin');
 }

   function switchSYD(){
 	$('body').attr('class', 'sydney');
 }