
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	newGame();

  	$(".new").on("click",function(e){
  		newGame();
  	});
  
  	$("form").on("submit",function(e){
  		e.preventDefault();
  		var userGuess = $("#userGuess").val();
  		if ($.isNumeric(userGuess)){
  			if(100>= userGuess >= 1){
  			assessGuess(userGuess);
  			}else{
  				alert("Your guess must be a number between 1 and 100!");
  			}
  		}else{
  			alert("Your guess must be a number between 1 and 100!");
  		}
  	});

});

var secretNumber;
var count = 0;

function newGame(){
	
	$("#count").html("0");
	count = 0;
	$("#userGuess").attr("placeholder","Enter your Guess");
	$("#guessList").empty();
	secretNumber = Math.floor(Math.random()*100);
	$("form").disabled=false;
}

function assessGuess(userGuess){
	
	console.log("secret is "+secretNumber);
	console.log("guess is "+userGuess);
	var difference=Math.abs(secretNumber - userGuess);

	if (difference>=50){
		$("h2#feedback").html("Ice cold!");
	}else if (difference>=20){
		$("h2#feedback").html("Cold!");
	}else if(difference>=10){
		$("h2#feedback").html("Lukewarm");
	}else if(difference>=3){
		$("h2#feedback").html("Warm!");
	}else if(difference>0){
		$("h2#feedback").html("Hot!");
	}else{
		$("h2#feedback").html("You got it!");
		$("form").disabled();
	} 
	$("#guessList").append("<li>"+userGuess+"</li>");
	count+=1;
	$("#count").html(count);


}
