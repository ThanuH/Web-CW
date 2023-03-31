window.onload = function() {
	// get HTML elements
	var infoBox = document.getElementById("infoBox");
	var quizBox = document.getElementById("quizBox");
	var resultBox = document.getElementById("resultBox");
  var timerDisplay = document.getElementById("timer");
	var questionDisplay = document.getElementById("question");
	var optionsDisplay = document.getElementById("options");
	var scoreDisplay = document.getElementById("score");
	var startBtn = document.getElementById("startBtn");
	var restartBtn = document.getElementById("restartBtn");

	// set timer interval
	var timerInterval;

	// set initial score to 0
	var score = 0;

	// define questions
	var questions = [
		{
			question: "What is the capital of France?",
			options: ["London", "Paris", "Madrid", "Rome"],
			answer: 1
		},
		{
			question: "What is the largest planet in our solar system?",
			options: ["Jupiter", "Saturn", "Mars", "Venus"],
			answer: 0
		},
		{
			question: "Who wrote the book 'To Kill a Mockingbird'?",
			options: ["J.K. Rowling", "Harper Lee", "Stephenie Meyer", "Suzanne Collins"],
			answer: 1
		}
	];

	// add event listener to start button
	startBtn.addEventListener("click", function() {
		// hide info box and show quiz box
		infoBox.style.display = "none";
		quizBox.style.display = "block";
		
		// set current question to 0
		currentQuestion = 0;

		// start timer
		startTimer();

		// display first question
		displayQuestion();
	});

	// add event listener to restart button
	restartBtn.addEventListener("click", function() {
		// hide result box and show info box
		resultBox.style.display = "none";
		infoBox.style.display = "block";
		
		// reset score to 0
		score = 0;

		// reset current question to 0
		currentQuestion = 0;
	});

	// function to start timer
	function startTimer() {
		timerDisplay.innerText = "5";
		timerInterval = setInterval(function() {
			var time = parseInt(timerDisplay.innerText) - 1;
			timerDisplay.innerText = time.toString();

			// if time runs out, go to next question
			if (time == 0) {
				currentQuestion++;
				if (currentQuestion < questions.length) {
					displayQuestion();
				} else {
					showResults();
				}
			}
		}, 1000);
	}

  function displayQuestion() {
    // display timer
    timerDisplay.innerText = "5";

    // display question and options
    questionDisplay.innerText = questions[currentQuestion].question;

    optionsDisplay.innerHTML = "";
    for (var i = 0; i < questions[currentQuestion].options.length; i++) {
        var option = document.createElement("div");
        option.classList.add("option");
        option.innerText = questions[currentQuestion].options[i];
        option.setAttribute("data-option", i);
        option.addEventListener("click", function() {
            // check answer
            checkAnswer(this);

            // go to next question
            currentQuestion++;
            if (currentQuestion < questions.length) {
                setTimeout(displayQuestion, 500);
            } else {
                setTimeout(showResults, 500);
            }
        });

        optionsDisplay.appendChild(option);
    }
}

function checkAnswer(selectedOption) {
    // get the correct answer for the current question
    var correctOption = questions[currentQuestion].answer;

    // check if selected option is correct
    if (selectedOption.getAttribute("data-option") == correctOption) {
        // add green background and tick icon to selected option
        selectedOption.classList.add("correct");
        selectedOption.innerHTML += "<i class='fas fa-check'></i>";

        // increase score
        score++;
    } else {
        // add red background and cross icon to selected option
        selectedOption.classList.add("wrong");
        selectedOption.innerHTML += "<i class='fas fa-times'></i>";

        // show the correct answer
        for (var i = 0; i < optionsDisplay.children.length; i++) {
            if (optionsDisplay.children[i].getAttribute("data-option") == correctOption) {
                optionsDisplay.children[i].classList.add("correct");
                optionsDisplay.children[i].innerHTML += "<i class='fas fa-check'></i>";
            }
        }
    }

    // disable options to prevent multiple selection
    for (var i = 0; i < optionsDisplay.children.length; i++) {
        optionsDisplay.children[i].classList.add("disabled");
    }
}


	// function to show results
	function showResults() {
		// stop timer
	// stop timer
	clearInterval(timerInterval);

	// hide quiz box and show result box
	quizBox.style.display = "none";
	resultBox.style.display = "block";

	// display score
	scoreDisplay.innerText = "You scored " + score + " out of " + questions.length;

	// reset options display
	optionsDisplay.innerHTML = "";

	// reset score
	score = 0;
}
	// stop timer
	clearInterval(timerInterval);

	// hide quiz box and show result box
	quizBox.style.display = "none";
	resultBox.style.display = "block";

	// display score
	scoreDisplay.innerText = "You scored " + score + " out of " + questions.length;

	// reset options display
	optionsDisplay.innerHTML = "";

	// reset score
	score = 0;
}

