// Questions and answers
const questions = [
	{
		question: "Who is considered the 'King of Pop'?",
		answers: [
			{ text: "Michael Jackson", correct: true },
			{ text: "Elvis Presley", correct: false },
			{ text: "Prince", correct: false },
			{ text: "Madonna", correct: false }
		]
	},
	{
		question: "What is the highest-selling album of all time?",
		answers: [
			{ text: "Thriller by Michael Jackson", correct: true },
			{ text: "The Eagles Greatest Hits", correct: false },
			{ text: "Back in Black by AC/DC", correct: false },
			{ text: "The Dark Side of the Moon by Pink Floyd", correct: false }
		]
	},
	{
		question: "What is the name of the lead singer of the Rolling Stones?",
		answers: [
			{ text: "Paul McCartney", correct: false },
			{ text: "Keith Richards", correct: false },
			{ text: "Mick Jagger", correct: true },
			{ text: "Ringo Starr", correct: false }
		]
	},
	{
		question: "Who wrote the song 'Bohemian Rhapsody'?",
		answers: [
			{ text: "Freddie Mercury", correct: true },
			{ text: "Elton John", correct: false },
			{ text: "Paul McCartney", correct: false },
			{ text: "Mick Jagger", correct: false }
		]
	},
	{
		question: "What is the name of the musical film that features songs by ABBA?",
		answers: [
			{ text: "Moulin Rouge!", correct: false },
			{ text: "Grease", correct: false },
			{ text: "Mamma Mia!", correct: true },
			{ text: "La La Land", correct: false }
		]
	},
	{
		question: "Who is known as the 'Queen of Soul'?",
		answers: [
			{ text: "Etta James", correct: false },
			{ text: "Aretha Franklin", correct: true },
			{ text: "Whitney Houston", correct: false },
			{ text: "Tina Turner", correct: false }
		]
	},
	{
		question: "What is the name of the lead singer of the band U2?",
		answers: [
			{ text: "Bono", correct: true },
			{ text: "The Edge", correct: false },
			{ text: "Adam Clayton", correct: false },
			{ text: "Larry Mullen Jr.", correct: false }
		]
	},
	{
		question: "What is the name of the guitar legend known for his hit song 'Purple Haze'?",
		answers: [
			{ text: "Eric Clapton", correct: false },
			{ text: "Jimi Hendrix", correct: true },
			{ text: "Jimmy Page", correct: false },
			{ text: "Eddie Van Halen", correct: false }
		]
	},
	{
		question: "What is the name of the music festival held annually in the desert of California?",
		answers: [
			{ text: "Coachella", correct: true },
			{ text: "Bonnaroo", correct: false },
			{ text: "Lollapalooza", correct: false },
			{ text: "Glastonbury", correct: false }
		]
	},
	{
		question: "Who is the best-selling female artist of all time?",
		answers: [
			{ text: "Whitney Houston", correct: false },
			{ text: "Madonna", correct: false },
			{ text: "Mariah Carey", correct: true },
			{ text: "Celine Dion", correct: false }
		]
	},
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 5;
let questionCount = questions.length;
let questionNumber = currentQuestion + 1;

// Function to start the quiz
function startQuiz() {
	// Hide start button and show question container
	document.getElementById("question-container").style.display = "block";
	document.getElementsByTagName("button")[0].style.display = "none";
	// Display first question
	displayQuestion();
	startCountdown();
}

// Function to display a question and its answers
function displayQuestion() {
	// Display question
	document.getElementById("question").textContent = questions[currentQuestion].question;
	// Display answer options
	for (let i = 0; i < 4; i++) {
		let answerButton = document.getElementsByClassName("btn")[i];
		answerButton.textContent = questions[currentQuestion].answers[i].text;
	}
	// Display current question number and total number of questions
	document.getElementById("question-number").textContent = `Question ${questionNumber} of ${questionCount}`;
}


// Function to start countdown
function startCountdown() {
	// Display time left
	document.getElementById("timer").textContent = timeLeft;
	// Decrease time left every second
	let countdown = setInterval(function () {
		timeLeft--;
		document.getElementById("timer").textContent = timeLeft;
		// Skip to next question if time is up
		if (timeLeft <= 0) {
			clearInterval(countdown);
			timeLeft = 5;
			skipQuestion();
		}
	}, 2000);
}

// Function to handle answer selection
function answerSelected(answerIndex) {
	// Increase score if answer is correct
	if (questions[currentQuestion].answers[answerIndex].correct) {
		score++;
	}
	// Skip to next question
	timeLeft = 5;
	skipQuestion();
	
}

// Function to skip to next question
function skipQuestion() {
	// Go to next question or end quiz if all questions have been answered
	if (currentQuestion < questions.length - 1) {
		currentQuestion++;
		questionNumber++;
		displayQuestion();
		startCountdown();
	} else {
		endQuiz();
	}

	// Reset time if there are no more questions
	if (currentQuestion >= questions.length) {
		timeLeft = 5;
	}
}

// Function to end the quiz and display score
function endQuiz() {
	// Hide question container and show score container
	document.getElementById("question-container").style.display = "none";
	document.getElementById("score-container").style.display = "block";
	// Display score
	document.getElementById("score").textContent = score + "/" + questions.length;
}

// Function to restart the quiz
function restartQuiz() {
	// Reset variables
	currentQuestion = 0;
	score = 0;
	timeLeft = 5;
	questionNumber = currentQuestion + 1;
	// Hide score container and show start button
	document.getElementById("score-container").style.display = "none";
	document.getElementsByTagName("button")[0].style.display = "block";
}

// Function to show info box
function showInfoBox() {
	document.getElementById("info-box").style.display = "block";
}

// Function to hide info box
function hideInfoBox() {
	document.getElementById("info-box").style.display = "none";
}

// Function to continue to quiz from info box
function continueToQuiz() {
	hideInfoBox();
	startQuiz();
	startCountdown();
}