let answer_1 = document.getElementById("answer-1");
let answer_2 = document.getElementById("answer-2");
let answer_3 = document.getElementById("answer-3");
let answer_4 = document.getElementById("answer-4");

let question    = document.getElementById("quiz");
let n_question  = document.getElementById("question-number");
let answer_list = Array.from(document.querySelectorAll(".answer"));
let progress    = document.getElementById("progress");
// console.log(answer_list);

let start = document.getElementById("start");
let next = document.getElementById("next");

let array = [];
let index;

let question_count = 0;
let score = 0;
let count = 0;

//Store User Answer
let user_answer = undefined;

start.addEventListener("click", startQuiz);
next.addEventListener("mouseover", nextButton);
next.addEventListener("click", nextQuestion);
answer_1.addEventListener("click", nextQuiz);
answer_2.addEventListener("click", nextQuiz);
answer_3.addEventListener("click", nextQuiz);
answer_4.addEventListener("click", nextQuiz);

function startQuiz(){
    let username = document.getElementById("username-input").value;
    document.getElementById("username").innerText = `Hello ${username}`;
    
    if (username != "") {
        document.getElementById("first-slide").style.display  = "none";
        document.getElementById("quiz-app").style.display     = "flex";
        document.getElementById("quiz-info").style.display    = "block";
        document.getElementById("container").style.marginTop  = "80px";
        randomQuestion();
    }
    else{
        document.getElementById("empty-input").innerText = "Please Enter a name to start the quizz";
    }
}

function nextQuiz(){
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
    if (question_count == questions.length - 1) {
        document.getElementById("first-slide").style.display  = "block";
        document.getElementById("quiz-app").style.display     = "none";
        document.getElementById("quiz-info").style.display    = "none";
    } else {
        question_count++;
        randomQuestion();
    }
}

function show() {
    question.innerText = questions[index]['quest'];
    for (let i = 0; i< answer_list.length; i++) {
        answer_list[i].innerText = questions[index]['option'][i];
    }
    count++;
    progress.innerText = `${count} questions`;
    console.log(count);
}

function randomQuestion(){
    let random_number = Math.floor(Math.random() * questions.length);
    if(array.length > 0){
        if (array.includes(random_number)) {
            randomQuestion();
        } else {
            index = random_number;
            show();
            array.push(index);
        }
    }
    if (array.length == 0) {
        index = random_number;
        show();
        array.push(index);
    }
}







