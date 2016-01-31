/*
 * Hi Megan!  I am adding feedback about your code in Javascript comments like this one.
 * 
 * Overall, the logic behind your "change" function is great.  You just have some syntax issues
 * here that are preventing the page from working.  I will point them out inline in the code below.
 */

$(document).ready(function() {
//send input on Submit

/* This submit event function needs to be called on the form itself, not on the submit button.
 * You click on a button, but you submit a form.
 *
 * Also, I think you are trying to combine creating and calling a named function ("change") with creating
 * an anonymous function.  Using either is fine, but you cannot do both at the same time.  
 * Since you are naming your function below, I would recommend calling the named function in this 
 * submit event here - i.e. changing the line below to the following:
 *
 *    $('form').submit(change);
 *
 * Once you do that, you can create your change() function exactly as you are doing further down in
 * this file.
 */

$('#submit-btn').submit(function(change){


function change(event) {
	/* Nice use of event.preventDefault() here.  Don't forget to pass in "event" as an argument
	 * to the change function to make sure this works in all browsers.  You would do this by changing
	 * the line above to this:
	 *
	 *    function change(event) {
	 */
	event.preventDefault();

	//return the value of city-type
	var city = $('#city-type').val();
	
	/* Very nice use / formatting of your if-else statement here! */
	
	//Determine if city value is eequal to New York OR NYC OR New York City
	if (city == 'New York' || city =='NYC' || city == 'New York City') {
		//then find the selector which I thought was the different classes in the css
		//find the attribute and assign the new value

		/* This line below is not actually doing anything.  You need to add a class to the body
		 * tag that corresponds to the city the user selected.
		 * The line below is adding an attribute called "url" to any element on the page that
		 * has a class called "nyc" (which does not exist because there is no tag on the page with that
		 * class yet - you have to tell the program to give an element (i.e. "body") that tag).
		 */
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

    }} // You have an extra close parenthesis here.

}); 
/* ^^ Make sure you close out your $(document).ready(function() {}); function properly.
 * See how I changed this last line from:
 *
 *    }
 *
 * to:
 *
 *    });
 */
