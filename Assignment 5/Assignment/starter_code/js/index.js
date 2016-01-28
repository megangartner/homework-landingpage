$(document).ready(function() {
//send input on Submit
$('#submit-btn').submit(function(change){	


function change() {
	event.preventDefault();
	//return the value of city-type
	var city = $('#city-type').val();
	//Determine if city value is eequal to New York OR NYC OR New York City
	if (city == 'New York' || city =='NYC' || city == 'New York City') {
		//then find the selector which I thought was the different classes in the css
		//find the attribute and assign the new value
		$('.nyc').attr('url','../images/nyc.jpg');
	} else if (city == 'San Francisco' || city =='SF' || city == 'Bay Area') {
		$('.sf').attr('url','../images/sf.jpg');$('background-image').attr('url','../images/nyc.jpg');
	//continue with remaining city values for 'else if' statements
	} else if (city == 'Los Angeles' || city =='LA' || city == 'LAX') {
		$('.la').attr('url','../images/la.jpg');
	} else if (city == 'Austin' || city =='ATX') {
		$('.austin').attr('url','../images/austin.jpg');
	} else if (city == 'Sydney' || city =='SYD') {
		$('.sydney').attr('url','../images/sydney.jpg');

    }}}
}
