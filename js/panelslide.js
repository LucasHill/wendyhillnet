function display(panel) {
if(panel=="close") {

$("div#panel").animate({
	width: "0px"
}, "slow", function(){
	//Sets all other panel content to invisible
	$('div#artist-bio').css("display","none");
	$('div#gallery').css("display","none");
	$('div#publications').css("display","none");
	$('div#contact').css("display","none");
	$('div#links').css("display","none");

	});

}
else {
//alert("Hello");
$("div#panel").animate({
	width: "0px"
}, "slow", function(){
	//Sets all other panel content to invisible
	$('div#artist-bio').css("display","none");
	$('div#gallery').css("display","none");
	$('div#publications').css("display","none");
	$('div#contact').css("display","none");
	$('div#links').css("display","none");

	//Shows desired content
	$(panel).css("display","inline");});

$("div#panel").animate({
	width: "750px"
})
.animate({
	width: "850px"
}, "fast");

}
}
