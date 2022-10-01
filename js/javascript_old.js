$(document).ready(function() {
	$("li.sliding-element").click(function(){
		$(".artist-bio").css("visibility","visible");
		$("div#panel").animate({
			width: "0px"
		})
		$("div#panel").animate({
			width: "900px"
		})
		.animate({
			width: "800px"
		}, "fast");
		
	});	
	
   $("li#hide_button").click(function(){
		$("div#panel").animate({
			width: "0px"
		}, "fast");
		
	
   });	
	
});