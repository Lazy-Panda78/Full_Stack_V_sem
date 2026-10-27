let currentQuestion = 0;
let score = 0;
let answered = false;

let questionElement = document.getElementById("question");
let progressElement = document.getElementById("progress");
let scoreElement = document.getElementById("score");
let explanationElement = document.getElementById("explanation");

let timerElement = document.getElementById("timer");

let buttons = [
    document.getElementById("option0"),
    document.getElementById("option1"),
    document.getElementById("option2"),
    document.getElementById("option3")
];

function showQuestion() {
    let q = questions[currentQuestion];

    questionElement.innerText = q.question;

    progressElement.innerText =
        "Q " + (currentQuestion + 1) + "/" + questions.length;

    scoreElement.innerText = score;
    explanationElement.innerText = "";

    for (let i = 0; i < 4; i++) {
        buttons[i].innerText = q.options[i];
        buttons[i].disabled = false;
    }

    answered = false;
}

showQuestion();



let questions = [
    {
        question: "What is JavaScript?",
        options: [
            "Programming Language",
            "Database",
            "Operating System",
            "Browser"
        ],
        answer: 0,
        explanation: "JavaScript is a programming language used to make web pages interactive."
    },
    {
        question: "Which keyword declares a constant?",
        options: ["let", "var", "const", "int"],
        answer: 2,
        explanation: "const declares a variable binding that cannot be reassigned."
    },
    {
        question: "Which method prints output to the console?",
        options: ["print()", "echo()", "console.log()", "display()"],
        answer: 2,
        explanation: "console.log() prints messages to the browser console."
    },
    {
        question: "Which operator checks strict equality?",
        options: ["=", "==", "===", "!="],
        answer: 2,
        explanation: "The === operator compares values without type coercion."
    },
    {
        question: "Which method adds an item to the end of an array?",
        options: ["pop()", "push()", "shift()", "join()"],
        answer: 1,
        explanation: "push() adds one or more elements to the end of an array."
    }
];