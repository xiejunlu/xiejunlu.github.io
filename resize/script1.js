for(var i = 0; i < 10; i++) {
	for(var j = 0; j < 20; j++) {
		$("body").append("<div class='box'></div>");
	}
}

// var randomNum = Math.round(Math.random() * 4 + 1);
// console.log(randomNum);

$("#box_8").click(function() {
	var newColor = '#' + Math.floor(Math.random()*16777215).toString(16);
	var randomArrayNumber = Math.round(Math.random() * 6);
	var array = ["ALL", "I", "WANT", "FOR", "CHRISTMAS","IS","YOU"];
	// var fireworks = ["firework1.gif", "firework2.gif", "firework3.gif", "firework4.gif","firework5.gif"];
 //   var randomfire = fireworks[Math.floor(Math.random()*5)];
    var randomNum = Math.round(Math.random() * 4 + 1);
    
    $("body").css("background-color",newColor);
    
// console.log(randomNum);
    
	$("#box_1").css("background-image", "url(images/firework" + randomNum + ".gif");
	$("#box_3").css("background-image", "url(images/firework" + randomNum + ".gif");
	$("#box_5").css("background-image", "url(images/firework" + randomNum + ".gif");
	$("#box_10").css("background-image", "url(images/firework" + randomNum + ".gif");
	$("#box_13").css("background-image", "url(images/firework" + randomNum + ".gif");
	$("#box_12").css("background-image", "url(images/firework" + randomNum + ".gif");
	$("#box_7").css("background-image", "url(images/firework" + randomNum + ".gif");

	//	add a randomized beverage to the yellow box
	
	// console.log(array[2]);
	//html replaces whatever is inside of the element
	$("#box_2").html("<p>" + array[randomArrayNumber] + "</p>");
	$("#box_6").html("<p>" + array[randomArrayNumber] + "</p>");
	$("#box_9").html("<p>" + array[randomArrayNumber] + "</p>");
	$("#box_11").html("<p>" + array[randomArrayNumber] + "</p>");
	$("#box_14").html("<p>" + array[randomArrayNumber] + "</p>");
	$("#box_16").html("<p>" + array[randomArrayNumber] + "</p>");
});





