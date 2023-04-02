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
			question: "What is the best-selling album of all time?",
			options: ["Abbey Road by The Beatles", " Thriller by Michael Jackson", "MadrBack in Black by AC/DC", "Rumours by Fleetwood Mac"],
			answer: 1
		},
		{
			question: "Which music streaming service has the most subscribers worldwide as of 2021?",
			options: ["Apple Music", "Spotify", "Amazon Musics", "Tidal"],
			answer: 1
		},
		{
			question: "Who won the Grammy Award for Album of the Year in 2021?",
			options: ["Taylor Swift - folklore", "Dua Lipa - Future Nostalgia", "Beyoncé - Black Parade", "Billie Eilish - When We All Fall Asleep, Where Do We Go?"],
			answer: 0
		},
		{
			question: "Which music genre emerged in the African American communities in the United States in the 1970s and became popular worldwide?",
			options: ["Jazz", "Hip-hop", "Blues", "Rock"],
			answer: 1
		},
		{
			question: "Which band had a hit in 1982 with the song Eye of the Tiger, which was featured in the movie Rocky III?",
			options: ["Queen", "Guns N' Roses", "Journey", "Survivor"],
			answer: 3
		},
		{
			question: "Who is known as the King of Pop?",
			options: ["Prince", "Michael Jackson", "Elvis Presley", "Stevie Wonder"],
			answer: 1
		},
		{
			question: "Which music festival in the United States is famous for its flower crowns and celebrity attendees?",
			options: ["Coachella", "Lollapalooza", "Bonnaroo", "Glastonbury"],
			answer: 0
		},
		{
			question: "Who founded the music streaming service Tidal in 2014?",
			options: ["Jay-Z", "Dr. Dre", "Sean Combs", "Kanye West"],
			answer: 0
		},
		{
			question: "Who released the hit song Shape of You in 2017?",
			options: ["Ed Sheeran", "Justin Bieber", "Drake", "Shawn Mendes"],
			answer: 0
		},
		{
			question: "What is the name of the first music video ever played on MTV in 1981?",
			options: ["Video Killed the Radio Star by The Buggles", "Thriller by Michael Jackson", "Billie Jean by Michael Jackson", "I Want My MTV by Dire Straits"],
			answer: 0
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
	document.getElementById("questionNum").innerText = "Question " + (currentQuestion + 1) + " of " + questions.length;
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

