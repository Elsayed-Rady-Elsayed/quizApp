const quetions = [
    {
        question:"which is larger naimal in the world ?",
        answer:[
            {text:"shark",correct:false},
            {text:"lion",correct:false},
            {text:"blue whale",correct:true},
            {text:"giraffe",correct:false},
        ]
    },
    {
        question:"what is the name of watermelon?",
        answer:[
            {text:"watermelon",correct:false},
            {text:"mango",correct:false},
            {text:"banana",correct:false},
            {text:"apple",correct:true},
        ]
    },
    {
        question:"what is the name of largest country in africa?",
        answer:[
            {text:"egypt",correct:false},
            {text:"tunis",correct:true},
            {text:"moracoo",correct:false},
            {text:"gana",correct:false},
        ]
    },
    {
        question:"what is your gender ?",
        answer:[
            {text:"male",correct:true},
            {text:"female",correct:false},
            {text:"other",correct:false},
            {text:"not now",correct:false},
        ]
    },
    {
        question:"which is larger naimal in the world ?",
        answer:[
            {text:"shark",correct:false},
            {text:"lion",correct:false},
            {text:"blue whale",correct:true},
            {text:"giraffe",correct:false},
        ]
    },
];
const question = document.getElementById("question");
const answersBtns = document.getElementById("answers-btns");
const nextBtn = document.getElementById("nextBtn");
let currentIdx = 0;
let score = 0;

function startQuiz(){
    currentIdx = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuiz();
}

function resetAll(){
    question.innerHTML = "";
    nextBtn.style.display = "none";
    answersBtns.innerHTML = "";
}

function showQuiz(){
    resetAll();
    let currentQuestion = quetions[currentIdx];
    let questionNo = currentIdx + 1;
    question.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answer.forEach((el)=>{
        const btn = document.createElement("button");
        btn.innerHTML = el.text;
        btn.classList.add("btn");
        answersBtns.appendChild(btn);
        if(el.correct){
            btn.dataset.correct = el.correct;
        }
        btn.addEventListener("click",selectAnswer);
    });
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("inCorrect");
    }
    Array.from(answersBtns.children).forEach(el=>{
        if(el.dataset.correct == "true"){
            el.classList.add("correct");
        }
        el.disabled = true;
    });
    nextBtn.style.display = "block";
}

function showScore(){
    resetAll();
    question.innerHTML = `you scored ${score} out of ${quetions.length}`;
    nextBtn.innerHTML = "start again";
    nextBtn.style.display = "block";
}

function handleNextBtn(){
    currentIdx++;
    if(currentIdx<quetions.length){
        showQuiz();
    }else{
        showScore();
    }
}

nextBtn.addEventListener("click",()=>{
    if(currentIdx < quetions.length){
        handleNextBtn();
    }else{
        startQuiz();
    }
})

startQuiz();