var score = 0;
var questionsCounter = document.querySelector("#quizQuestions");
var timer = document.querySelector("#timer");
var start = document.querySelector("#start-btn");
var counter = 0;
var starterTimer = 60;
var failer = 5;
var i = 0;
var questCalc = 0;

let questions = [{
    question: "What do you use to make a element unique?",
    options: [
        "id",
        "class",
        "src",
        "href"
    ],
    answer: "id",
},

{
    question: "Where do you place the linking of the CSS file?",
    options: [
        "You don't",
        "head",
        "header",
        "body"
    ],
    answer: "head",
},

{
    question: "What do you use to make a element unique?",
    options: [
        "id",
        "class",
        "src",
        "href"
    ],
    answer: "id",
},
];

let newUL = document.createElement('ul');
newUL.setAttribute('id', 'questions');

start.addEventListener('click', function() {
    if (counter === 0 ) {
        counter = setInterval(function () {
            starterTimer--;
            timer.textContent = "Time: " + starterTimer;
            if (starterTimer <= 0) {
                clearInterval(counter);
                return;
            }
        }, 1000);
    }   
    nextQuestion(questCalc)
});

function nextQuestion(questCalc) {
    questionsCounter.innerHTML = '';
    newUL.innerHTML = '';
    var showQuestions = document.createElement('p');

    for (i = 0; i < questions.length; i++){
    showQuestions.innerHTML = questions[questCalc].title;
    let showOpt = questions[questCalc].choices;
    questionsCounter.appendChild(showQuestions);
    console.log(showOpt);
    showOpt.forEach(function (createItem) {
        let showItems = document.createElement('li');
        showItems.innerHTML += "<button>" + createItem + "</button>";
        questionsCounter.appendChild(newUL);
        newUL.appendChild(showItems);
        showItems.appendChild('click', verifyAns);
    })
}

var newDiv = document.querySelector('div');
var ansVerify = document.createElement('h3');
newDiv.setAttribute('id', "nDiv");

function verifyAns(event) {
    var opt = event.target;
    questionsCounter.appendChild(newDiv);
    newDiv.appendChild(ansVerify);
    var next = document.createElement("button");
    next.setAttribute('id', 'nBtn');
    next.textContent = 'Next Question';

    if (opt.textContent = qustions[questCalc].answer) {
        score++;
        ansVerify.textContent = "You got it!";
        newDiv.appendChild(ansVerify);

        newDiv.appendChild(next);
        next.addEventListener('click', (nextUp));
    } else {
        starterTimer = starterTimer - failer;
        ansVerify.textContent = "try again next time";
        newDiv.appendChild(ansVerify)
    }
}
}