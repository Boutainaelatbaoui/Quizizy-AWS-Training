let answer_1 = document.getElementById("answer-1");
let answer_2 = document.getElementById("answer-2");
let answer_3 = document.getElementById("answer-3");
let answer_4 = document.getElementById("answer-4");

document.getElementById("start").addEventListener("click", startQuiz);
document.getElementById("next").addEventListener("mouseover", nextButton);
answer_1.addEventListener("click", nextQuiz);
answer_2.addEventListener("click", nextQuiz);
answer_3.addEventListener("click", nextQuiz);
answer_4.addEventListener("click", nextQuiz);

function startQuiz(e){
    e.preventDefault();

    document.getElementById("first-slide").style.display  = "none";
    document.getElementById("quiz-app").style.display     = "flex";
    document.getElementById("quiz-info").style.display    = "block";
    document.getElementById("container").style.marginTop  = "80px";
}

function nextQuiz(e){
    e.preventDefault();

    document.getElementById("next").style.display    = "block";
    document.getElementById("answers").style.marginBottom  = "15px";
}

function nextButton(){

    document.getElementById("chevron").style.display    = "inline";

}

