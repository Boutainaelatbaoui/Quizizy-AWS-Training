let question    = document.getElementById("quiz");
let n_question  = document.getElementById("question-number");
let answer_list = Array.from(document.querySelectorAll(".answer"));
let progress    = document.getElementById("progress");
let score_element      = document.getElementById("score");
// console.log(answer_list);

let start = document.getElementById("start");
let next = document.getElementById("next");

let array = [];
let index;

let question_count = 0;
let score = 0;
let correct = 0;
let wrong = 0;
let count = 0;

start.addEventListener("click", startQuiz);
next.addEventListener("mouseover", nextButton);
next.addEventListener("click", nextQuestion);

function startQuiz(){
    let username = document.getElementById("username-input").value;
    document.getElementById("username").innerText = `Hello ${username}`;
    
    if (username != "") {
        document.getElementById("first-slide").style.display  = "none";
        document.getElementById("quiz-app").style.display     = "flex";
        document.getElementById("quiz-info").style.display    = "block";
        document.getElementById("container").style.marginTop  = "80px";
        score_element.innerText = `Score: ${score}`;
        randomQuestion();
    }
    else{
        document.getElementById("empty-input").innerText = "Please Enter a name to start the quizz";
    }
}

function nextButton(){

    document.getElementById("chevron").style.display    = "inline";

}
function nextQuestion(){
    document.getElementById("next").style.display    = "none";
    document.getElementById("answers").style.marginBottom  = "0";
    document.getElementById("chevron").style.display    = "none";

    for (let i = 0; i < answer_list.length; i++){
        answer_list[i].classList.remove("correct");
        answer_list[i].classList.remove("wrong");
        answer_list[i].disabled = false; 
    }

    if (question_count == questions.length - 1) {
        document.getElementById("first-slide").style.display  = "block";
        document.getElementById("quiz-app").style.display     = "none";
        document.getElementById("quiz-info").style.display    = "none";
    } else {
        question_count++;
        score_element.innerText = `Score: ${score}`;
        randomQuestion();
    }
}

function show() {
    question.innerText = questions[index]['quest'];
    for (let i = 0; i < answer_list.length; i++) {
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

for (let i = 0; i < answer_list.length; i++) {
    answer_list[i].addEventListener("click", () => {

        let id = answer_list[i].getAttribute("data-id");

        if(id == questions[index].response){
            answer_list[i].classList.add("correct");
            score+=10;
            correct++;
            console.log("correct: " + correct);
        }
        else{
            answer_list[i].classList.add("wrong");
            wrong++;
            console.log("wrong: " + wrong);
        }
        for (let j = 0; j < answer_list.length; j++) {
            answer_list[j].disabled = true;   
        }
        document.getElementById("next").style.display    = "block";
        document.getElementById("answers").style.marginBottom  = "15px";
    })
    
}







