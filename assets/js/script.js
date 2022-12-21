const quizData = [
    {
        question: "What is the oldest recorded town in the UK",
        a: "Brighton",
        b: "Bristol",
        c: "Colchester",
        d: "Cambridge",

        correct: "c" ,
    },
    {
        question: "What is the highest mountain in Britian?",
        a: "Ben Macdui",
        b: "Ben Nevis",
        c: "Snowdown",
        d: "Scafell Pike",

        correct: "b" ,
    },
    {
        question: "What is the capital of Canada",
        a: "Vancouver",
        b: "Montréal",
        c: "Toronto",
        d: "Ottawa",

        correct: "d" ,
    },
    {
        question: "What is the largest desert in the world?",
        a: "Antarctic Desert",
        b: "Arctic Desert",
        c: "Sahara Desert",
        d: "Arabian Desert",

        correct: "a" ,
    },
    {
        question: "Which London Underground is reporesented as green on the tube map?",
        a: "Jubilee Line",
        b: "Central Line",
        c: "Victoria Line",
        d: "District Line",

        correct: "d" ,
    },
    {
        question: "Which country has the most castles in the world?",
        a: "Italy",
        b: "Germany",
        c: "Spain",
        d: "Scotland",

        correct: "b" ,
    },
    {
        question: "How many large islands make up Hawaii?",
        a: "2",
        b: "4",
        c: "8",
        d: "12",

        correct: "c" ,
    },
    {
        question: "Which river flows through Glasgow?",
        a: "River Clyde",
        b: "River Thames",
        c: "River Severn",
        d: "River Tay",

        correct: "a" ,
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEls = document.getElementById('question')
const a_answer = document.getElementById('a_answer')
const b_answer = document.getElementById('b_answer')
const c_answer = document.getElementById('c_answer')
const d_answer = document.getElementById('d_answer')