$(document).ready(function(){
	console.log("Ready to go.");

	// Set questions, options, and answers, variable counter
	var score = 0;
	var choice = [];
	var answers = [];
	var allQuestions = 
	[{question: "Let's start off simple. What is my middle name?", choices: ["Alex","Abel","Antonio","Raphael","Anthony"], correctAnswer:"answer4"},
	{question: "Okay. You at least attempted to answer the first question. Next, let's see if you know how many brothers I have.", choices: ["Trick question. You have sisters.","1","2","3","4"], correctAnswer:"answer2"},
	{question: "What city was I born in?", choices: ["Los Angeles, CA","Tucson, AZ","Panama City, Panama","An undisclosed location south of the Equator","Oakland, CA"], correctAnswer:"answer2"}];

	// This is to hide the prompt and display the questions.
	$("#continue").on('click', function(){
		// Hide the prompt
		$("#prompt").hide();
		// Populate the question and answers
		$("#wrapper").find(".question").text(allQuestions[0].question);
		for (var i = 0; i <allQuestions[0].choices.length; i++) {
		allQuestions[0].choices[i] = "<span class='choice'><input type='radio' name='answer' value='answer"+i+"'><label for='"+i+"'>"+allQuestions[0].choices[i]+"</label></span>";
		choice.push(allQuestions[0].choices[i]);
		};
		$("#wrapper").find(".answers").append(choice);
		// Unveil the question and answers
		$("#wrapper").fadeIn("fast");
	});

	// Record the score here after clicking "next question" button, then load the next question
	$("#next1").on('click', function(){

		if($('input[name=answer]:checked').val()===undefined) {
			alert("Hey. Come on. Select an answer");
			return;
		}else{
			answers.push($('input[name=answer]:checked').val());
			console.log(answers);
		};
		// Hide the first question, first next button
		$(this).addClass("hidden");
		
		// Attempt to blank out choices before populating them with new ones
		$("#wrapper").find(".answers").empty();
		choice.length = 0;
		console.log(choice);

		$("#wrapper").find(".question").text(allQuestions[1].question);
		for (var i = 0; i <allQuestions[1].choices.length; i++) {
		allQuestions[1].choices[i] = "<span class='choice'><input type='radio' name='answer' value='answer"+i+"'><label for='"+i+"'>"+allQuestions[1].choices[i]+"</label></span>";
		choice.push(allQuestions[1].choices[i]);
		};
		$("#wrapper").find(".answers").append(choice);
		
		// Unveil the question and answers
		$("#next2").removeClass("hidden");
	});
	$("#next2").on('click', function(){

		if($('input[name=answer]:checked').val()===undefined) {
			alert("Hey. Come on. Select an answer");
			return;
		}else{
			answers.push($('input[name=answer]:checked').val());
			console.log(answers);
		};
		// Hide the first question, first next button
		$(this).addClass("hidden");
		
		// Attempt to blank out choices before populating them with new ones
		$("#wrapper").find(".answers").empty();
		choice.length = 0;
		console.log(choice);

		$("#wrapper").find(".question").text(allQuestions[2].question);
		for (var i = 0; i <allQuestions[2].choices.length; i++) {
		allQuestions[2].choices[i] = "<span class='choice'><input type='radio' name='answer' value='answer"+i+"'><label for='"+i+"'>"+allQuestions[2].choices[i]+"</label></span>";
		choice.push(allQuestions[2].choices[i]);
		};
		$("#wrapper").find(".answers").append(choice);
		
		// Unveil the question and answers
		$("#next3").removeClass("hidden");
	});
	$("#next3").on('click', function(){

		if($('input[name=answer]:checked').val()===undefined) {
			alert("Hey. Come on. Select an answer");
			return;
		}else{
			answers.push($('input[name=answer]:checked').val());
			console.log(answers);
		};
		
		// Hide the first question, first next button
		$(this).addClass("hidden");
		
		// Attempt to blank out choices before populating them with new ones
		$("#wrapper").find(".answers").empty();
		choice.length = 0;
		console.log(choice);
		
		// Unveil the results page and calculate the result

		for (var i = 0; i < answers.length; i++) {
			if (answers[i]===allQuestions[i].correctAnswer) {
				score++;
			}
		};

		$("div .question").addClass("hidden");
		$("#result").removeClass("hidden");
		$("#result").find(".score").append("<span class='prompt'>You got "+score+" out of "+answers.length+" answers right.</span>")

		(score==(answers.length)) ? $("#result").find(".score").append("<span class='prompt'>You got them all right! Well done!</span>") : $("#result").find(".score").append("<span class='prompt'>Study up and try again, loser.</span>")
	});
});