function change() {
	event.preventDefault();
	//return the value of city-type
	var image = ["NYC", "SF", "LA", "ATX", "SYD"]

	for(i=0; i<5; i++){
    	$("select").append("<option>" + i + "</option>");
} 
$(document).ready(function(){
	$("select").change(function(){
		$("option value").val();
    	
});
}