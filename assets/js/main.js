let answer_1 = document.getElementById("answer-1");
let answer_2 = document.getElementById("answer-2");
let answer_3 = document.getElementById("answer-3");
let answer_4 = document.getElementById("answer-4");

let question   = document.getElementById("quiz");
let n_question = document.getElementById("question-number");
let answer     = document.querySelector("answer");

let start = document.getElementById("start");
let next = document.getElementById("next");

let index = 0;

//Total points
let correct = 0;

//Store User Answer
let user_answer = undefined;

start.addEventListener("click", startQuiz);
next.addEventListener("mouseover", nextButton);
next.addEventListener("click", nextQuestion);
answer_1.addEventListener("click", nextQuiz);
answer_2.addEventListener("click", nextQuiz);
answer_3.addEventListener("click", nextQuiz);
answer_4.addEventListener("click", nextQuiz);

function startQuiz(e){
    e.preventDefault();

    let username = document.getElementById("username-input").value;
    document.getElementById("username").innerText = `Hello ${username}`;
    
    if (username != "") {
        document.getElementById("first-slide").style.display  = "none";
        document.getElementById("quiz-app").style.display     = "flex";
        document.getElementById("quiz-info").style.display    = "block";
        document.getElementById("container").style.marginTop  = "80px";
        loadData();
    }
    else{
        document.getElementById("empty-input").innerText = "Please Enter a name to start the quizz";
    }
}

function nextQuiz(e){
    e.preventDefault();

    document.getElementById("next").style.display    = "block";
    document.getElementById("answers").style.marginBottom  = "15px";

}

function nextButton(){

    document.getElementById("chevron").style.display    = "inline";

}
function nextQuestion(){
    document.getElementById("next").style.display    = "none";
    document.getElementById("answers").style.marginBottom  = "0";
    document.getElementById("chevron").style.display    = "none";
    loadData();
}

function loadData(){
    if(index > questions.length -1){
        console.log("Hello");
    }
    else{
        question.innerText   = questions[index].quest;
        answer_1.innerText   = questions[index].answer1;
        answer_2.innerText   = questions[index].answer2;
        answer_3.innerText   = questions[index].answer3;
        answer_4.innerText   = questions[index].answer4;
        index++;
    }
}




