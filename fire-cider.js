$(document).ready(function(){
	$(".logo").on("mouseenter", function(){
        $(this).attr("src", "natural-nellies-green.png");
    });
    $(".logo").on("mouseleave", function(){
        $(this).attr("src", "natural-nellies-black.png");
    });

});