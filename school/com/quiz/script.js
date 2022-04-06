var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    questions = {
        0: {
            question: "What day is it?",
            answer: days[new Date().getDay()],
            done: false
        },
        1: {
            question: "What month is it?",
            answer: months[new Date().getMonth()],
            done: false
        },
        2: {
            question: "What year is it?",
            answer: new Date().getFullYear().toString(),
            done: false
        }
    },
    questionDisplay = document.getElementById("question"),
    answerDisplay = document.getElementById("result"),
    input = document.getElementById("input"),
    questionCount = 0,
    correctCount = 0;

const newQuestion = () => {
    question = questions[Object.keys(questions)[Math.floor(Math.random() * Object.keys(questions).length)]]
    while (question["done"] == true) {
        question = questions[Object.keys(questions)[Math.floor(Math.random() * Object.keys(questions).length)]]
    } questionDisplay.innerHTML = question.question;
    return question;
}

const countdown = text => {
    var countdown = 3;
    input.disabled = true;
    answerDisplay.innerHTML = `${text} <span>${countdown}</span>.`;
    timer = setInterval(() => {
        if (countdown == 1) {
            question = newQuestion();
            answerDisplay.innerHTML = "";
            clearInterval(timer);
            input.disabled = false;
        } else {
            countdown--;
            answerDisplay.innerHTML = `${text} <span>${countdown}</span>.`;
        }
    }, 1000);
}

var question = newQuestion();
input.value = "";

document.addEventListener("keydown", event => {
    if (event.keyCode == 13) {
        questionCount++;
        if (questionCount < Object.keys(questions).length) {
            if (input.value.toLowerCase() == question.answer.toLowerCase()) {
                correctCount++;
                countdown("Correct! Next question in");
            } else {
                answerDisplay.innerHTML = `Incorrect. The correct answer was <span>${question.answer}</span>.`;
                input.disabled = true;
                setTimeout(() => {
                    question = newQuestion();
                    input.disabled = false;
                    answerDisplay.innerHTML = "";
                }, 2000);
            }
        } else {
            correctCount += input.value.toLowerCase() == question.answer.toLowerCase() ? 1 : 0;
            questionDisplay.innerHTML = `You scored ${correctCount}/${Object.keys(questions).length}.<br>To play again, click <span class="playAgain" onclick="location.reload()">here</span>.`;
            input.style.display = "none";
        } question.done = true;
        input.value = "";
    }
});