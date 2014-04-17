$(document).ready(function(){
	$(".logo").on("mouseenter", function(){
        $(this).attr("src", "natural-nellies-green.png");
    });
    $(".logo").on("mouseleave", function(){
        $(this).attr("src", "natural-nellies-black.png");
    });
    $(".item").on("mouseenter", function(){
    	$(".item").append("<span id='favorite' style='font-size: 10px'><i class='fa fa-heart-o'></i> Click to add to favorites.</span>");
    	$("#favorite i").on("click", function(){
    		$(this).removeClass("fa fa-heart-o");
    		$(this).addClass("fa fa-heart");
    	});
    });
	$(".item").on("mouseleave", function(){
		$("#favorite").remove();
    });
});