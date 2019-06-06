$(document).ready(function() {
 

 	$("#stream1_btn").click(function() {
 		$(".stream1").show();
		$(".stream2").show('slow');
		$(".stream3").show('medium');
	  	$(".stream1").show('fast');
	  	$(".stream1").show(1000);
	  	$(".stream1").hide(1000);
	  	
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});
	
	$( "p" ).click(function() {
    	$(".card_para").css("background-color", "red");
	});
	
	$(".card_head").mouseenter(function() {
		$(".card_head").css("background-color", "blue");
	});
	
	$("#header-one").mouseenter(function() {
		$("#header-one").css("font-size", "2em");
	});
	
	$("#header-two").mouseenter(function() {
		$("#header-two").css("font-size", "2em");
	});
	
	$("#header-three").mouseenter(function() {
		$("#header-three").css("font-size", "2em");
	});
	
	$("#header-four").mouseenter(function() {
		$("#header-four").css("font-size", "2em");
	});
	
	$("#header-five").mouseenter(function() {
		$("#header-five").css("font-size", "2em");
	});
	
	$("#header-six").mouseenter(function() {
		$("#header-six").css("font-size", "2em");
	});


}); 
