// Questions and answers
const questions = [
	{
		question: "What is the capital of France?",
		answers: [
			{ text: "London", correct: false },
			{ text: "Paris", correct: true },
			{ text: "Berlin", correct: false },
			{ text: "Madrid", correct: false }
		]
	},
	{
		question: "Who is the author of the Harry Potter series?",
		answers: [
			{ text: "J.K. Rowling", correct: true },
			{ text: "Stephen King", correct: false },
			{ text: "George R.R. Martin", correct: false },
			{ text: "Jane Austen", correct: false }
		]
	},
	{
		question: "What is the highest mountain in the world?",
		answers: [
			{ text: "Mount Everest", correct: true },
			{ text: "K2", correct: false },
			{ text: "Kangchenjunga", correct: false },
			{ text: "Lhotse", correct: false }
		]
	}
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 10;
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
	let countdown = setInterval(function() {
		timeLeft--;
		document.getElementById("timer").textContent = timeLeft;
	// Skip to next question if time is up
	if (timeLeft == 0) {
		clearInterval(countdown);
		timeLeft = 10;
		skipQuestion();
		}
	}, 1000);
}	

// Function to handle answer selection
function answerSelected(answerIndex) {
	// Increase score if answer is correct
	if (questions[currentQuestion].answers[answerIndex].correct) {
		score++;
	}
	// Skip to next question
	timeLeft = 10;
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
    timeLeft = 10;
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
	timeLeft = 10;
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


// var count = 15;
// var interval = setInterval(function(){
//   document.getElementById('count').innerHTML=count;
//   count--;
//   if (count === 0){
//     clearInterval(interval);
//     document.getElementById('count').innerHTML='Done';
//     // or...
//     alert("You're out of time!");
//   }
// }, 1000);