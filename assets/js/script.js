// Array of questions

const quizData = [{
    question: "What is the oldest recorded town in the UK",
    answer: {
        a: "Brighton",
        b: "Bristol",
        c: "Colchester",
        d: "Cambridge"
    },
    correctAnswer: "c",
},
{
    question: "What is the highest mountain in Britian?",
    answer: {
        a: "Ben Macdui",
        b: "Ben Nevis",
        c: "Snowdown",
        d: "Scafell Pike"
    },
    correctAnswer: "b",
},
{
    question: "What is the capital of Canada",
    answer: {
        a: "Vancouver",
        b: "Montréal",
        c: "Toronto",
        d: "Ottawa"
    },
    correctAnswer: "d",
},
{
    question: "What is the largest desert in the world?",
    answer: {
        a: "Antarctic Desert",
        b: "Arctic Desert",
        c: "Sahara Desert",
        d: "Arabian Desert"
    },
    correctAnswer: "a",
},
{
    question: "Which London Underground is represented as green on the tube map?",
    answer: {
        a: "Jubilee Line",
        b: "Central Line",
        c: "Victoria Line",
        d: "District Line"
    },
    correctAnswer: "d",
},
{
    question: "Which country has the most castles in the world?",
    answer: {
        a: "Italy",
        b: "Germany",
        c: "Spain",
        d: "Scotland"
    },


    correctAnswer: "b",
},
{
    question: "How many large islands make up Hawaii?",
    answer: {
        a: "2",
        b: "4",
        c: "8",
        d: "12"
    },
    correctAnswer: "c",
},
{
    question: "Which river flows through Glasgow?",
    answer: {
        a: "River Clyde",
        b: "River Thames",
        c: "River Severn",
        d: "River Tay"
    },
    correctAnswer: "a",
},
];

// Global let
let quizDataCopy = quizData;
let score = 0;
let currentQuiz;
let currentQuizData;
let timeLeft = 30;
let timer;
let questionCounter = 1;

// Global const
const quizContainer = document.getElementById('quiz-container');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_answer = document.getElementById('a_answer');
const b_answer = document.getElementById('b_answer');
const c_answer = document.getElementById('c_answer');
const d_answer = document.getElementById('d_answer');
const submitBtn = document.getElementById('next-btn');
const startContainer = document.getElementById('start-container');
const startBtn = document.getElementById('start-btn');
const resultContainer = document.getElementById('results-container');
const result = document.getElementById('result');
const alertMsg = document.querySelector('.error-msg-container');
const questionLength = document.getElementById('question-length');
const currentQuestions = document.getElementById('current-question');


// Sets quiz rule number of questions
questionLength.innerText = quizData.length;


// Resets Answers
const deselectAnswers = () => {
answerElements.forEach(answerElements => answerElements.checked = false);
};

// Start the quiz
startBtn.addEventListener('click', () => {
startContainer.classList.add('hide');
loadQuiz();
});

// Sets quiz to random
const randomizer = (num) => {
return Math.floor(Math.random() * num);
};

// Increments Current Questions
function incrementQuestion() {
questionCounter++;
currentQuestions.innerText = `${questionCounter} `;
}


// Loads Quiz
function loadQuiz() {

setTime();

// Hides start container and shows quiz container
quizContainer.classList.remove('hide');

currentQuiz = randomizer(quizDataCopy.length);
currentQuizData = quizDataCopy[currentQuiz];


deselectAnswers();

questionElement.innerText = currentQuizData.question;
a_answer.innerText = currentQuizData.answer.a;
b_answer.innerText = currentQuizData.answer.b;
c_answer.innerText = currentQuizData.answer.c;
d_answer.innerText = currentQuizData.answer.d;
}

// Timer for the quiz
displayTime();

function setTime() {

resetTime(timer);
timer = setInterval(function() {
    if (timeLeft == -1) {
        clearInterval(timer);
        alert('Oops! You ran out of time');
        window.location.reload();
    } else {
        displayTime();
        timeLeft--;
    }
}, 1000);

}

// Displays Time
function displayTime() {

if (timeLeft.toString().length < 2) {
    document.getElementById('time-left').innerHTML = "0" + timeLeft;
} else {
    document.getElementById('time-left').innerHTML = timeLeft;
}

}

// Resets Timer
function resetTime(timerInterval) {
clearInterval(timerInterval);
timeLeft = 30;
}

// Check if answer is correct
/** submitAnswer & submitBtn 
 *  exported into HTML */
function submitAnswer() {

// Checks if an answer is selected
const answers = document.querySelectorAll(".answer");
let isChecked;

answers.forEach(inp => {
    if (inp.checked) isChecked = true;
});

if (isChecked) {
    answerElements.forEach(el => {
        if (el.checked) {
            if (el.id === currentQuizData.correctAnswer) {
                score++;
                el.nextElementSibling.style.color="green";
                setTimeout(() => {
                    el.nextElementSibling.style.color=null;
                }, 2000);
            } else {
                el.nextElementSibling.style.color="red";
                setTimeout(() => {
                    el.nextElementSibling.style.color=null;
                }, 2000);
            }
        }
    });

    setTimeout(nextQuestion, 2000);
} else {
    alertMsg.style.display="flex";
}

}

// Move to the next question
function nextQuestion() {

alertMsg.style.display="none";

incrementQuestion();

quizDataCopy = quizDataCopy.filter(obj => obj !== currentQuizData);

if (quizDataCopy.length > 0) {
    loadQuiz();
    setTime();
} else {
    displayResults(score);
}

}

// Hides Quiz cointainer and shows Results container
function displayResults(score) {
let comment = document.getElementById('comment')
quizContainer.classList.add("hide");
resultContainer.classList.remove("hide");
result.innerText = `${score} out of ${quizData.length}`;

if (score === quizData.length) {
    comment.innerText = `
Awesome, You got every question right! 
You scored
`;
} else if (score < (quizData.length) && score > (quizData.length / 2)) {
    comment.innerText = `
You nearly got all of them right! 
You scored
`;
} else {
    comment.innerText = `
Well... That was disappointing
You scored
`;
}
}