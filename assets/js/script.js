// Array of questions

const quizData = [
    {
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

let quizDataCopy = quizData
let currentQuiz = 0
let score = 0 
let currentQuizData


const quiz = document.getElementById('quiz')
const answerElements = document.querySelectorAll('.answer')
const questionElement = document?.getElementById('question')
const a_answer = document.getElementById('a_answer')
const b_answer = document.getElementById('b_answer')
const c_answer = document.getElementById('c_answer')
const d_answer = document.getElementById('d_answer')
const submitBtn = document.getElementById('submit')

const deselectAnswers = () => {
    answerElements.forEach(answerElements => answerElements.checked = false)
}

// Sets quiz to random

const randomizer = (num) => {
    return Math.floor(Math.random() * num)
}


if (window.location.pathname === "/quiz.html") {
    loadQuiz()
}

// Loads Quiz

function loadQuiz() {

    currentQuiz = randomizer(quizDataCopy.length)
    currentQuizData = quizDataCopy[currentQuiz]
    const questionElement = document.getElementById('question')

    deselectAnswers()


    questionElement.innerText = currentQuizData.question
    a_answer.innerText = currentQuizData.answer.a
    b_answer.innerText = currentQuizData.answer.b
    c_answer.innerText = currentQuizData.answer.c
    d_answer.innerText = currentQuizData.answer.d
}



// Check if answer is correct
function submitAnswer() {
    answerElements.forEach(el => {
        if(el.checked) {
            if(el.id === currentQuizData.correctAnswer) {
                score ++
            } else {

            }
        }
    })
    
    // Move to the next question

    quizDataCopy = quizDataCopy.filter(obj => obj !== currentQuizData)
    
    if(currentQuiz < quizData.length) {
        loadQuiz()
    }

    console.log(score)
}
