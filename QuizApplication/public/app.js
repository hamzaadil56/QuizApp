let nextButton = document.getElementById("next")
let quizContainer = document.getElementById('quiz_app');
let resultsContainer = document.getElementById('results');
let submitButton = document.getElementById('submit');



let myQuestions = [{
    question: `<h2><b>Who is the founder of Pakistan?</b></h2>`,
    answers: {
      A: "Muhammad Ali Jinnah",
      B: "Liaquat Ali Khan ",
      C: "Allama Iqbal",
      D:"None of these"
    },
    correctAnswer: "A"
  },
  {
    question: `<h2><b>Who invented JavaScript?</b></h2>`,
    answers: {
    A : "Douglas Crockford",
    B : 'Sheryl Sandberg',
    C : 'Brendan Eich',
    D : "Bill Gates"
    },
    correctAnswer: "C"
  },
  {
    question: `<h2><b>Who is the founder of Amazon?</b></h2>`,
    answers: {
      A: "Jeff Bezos",
      B: "Mark Zackerburg",
      C: "Elon Musk",
      d: "Jack Ma"
    },
    correctAnswer: "A"
},
{
  question: `<h2><b>How many worldcups Pakistan have won in Hockey?</b></h2>`,
  answers: {
    A: "5",
    B: "4",
    C: "1",
    d: "0"
  },
  correctAnswer: "B"
},

  ]



function buildQuiz(){
  
  const output = [];
  let heading = quizContainer.innerHTML = `<h1 id ="heading"><b>Quiz App</b></h1>`
  output.push(heading)
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      const answers = [];

      for(letter in currentQuestion.answers){
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label><br>`
        );
      }

      output.push(
        
        `<div class="question${questionNumber}"> ${currentQuestion.question}<div class="answers"> ${answers.join('')} </div> </div>
        `
      );
    }
  );

  

  quizContainer.innerHTML = output.join('');
  nextButton.disabled = true
}
function showResults(){
 const answerContainers = quizContainer.querySelectorAll('.answers');
 let numCorrect = 0;

 myQuestions.forEach( (currentQuestion, questionNumber) => {

   const answerContainer = answerContainers[questionNumber];
   
   const selector = `input[name=question${questionNumber}]:checked`;
  
   const userAnswer = (answerContainer.querySelector(selector) || {}).value;

   if(userAnswer === currentQuestion.correctAnswer){
     numCorrect++;

     answerContainers[questionNumber].style.color = 'darkgreen';
   }
   else{
     answerContainers[questionNumber].style.color = 'red';
   }
 });

 resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
 resultsContainer.style.color = "white"
 resultsContainer.style.fontSize = "30px"
 

submitButton.disabled = true
clearInterval(interval)


}


  
buildQuiz();
alert(" Press the start button to start the quiz and you have 15 seconds to complete the quiz!")

let question0 = document.querySelector(".question0")

let question1 = document.querySelector(".question1")
let question2 = document.querySelector(".question2")
let question3 = document.querySelector(".question3")

question1.style.display = "none"
question2.style.display = "none"
question3.style.display = "none"


function next(){
  question0.style.display = "none"
 
  if(question1.style.display === "none" && question2.style.display === "none"){
    question1.style.display = "block"

  }
  else if(question1.style.display === "block" && question2.style.display === "none"){
    question2.style.display = "block"
    question1.style.display = "none"
  }
  else if(question2.style.display === "block" && question1.style.display === "none"){
    
    question3.style.display = "block"
    question2.style.display = "none"
    nextButton.style.display = "none"
    submitButton.style.display="block"
    startButton.style.display = "none"
  }
    

 
}

let startButton = document.getElementById("start")

let timer = document.getElementById("timer")
let interval;
let time_remaining = 15
timer.innerHTML = `Time Remaining: ${time_remaining}`;


function quizTime(){
  timer.innerHTML = `Time Remaining: ${time_remaining}seconds`;
  if(time_remaining === 0){
    clearInterval(interval)
    alert("Time up! Now you cannot submit the quiz:(")
    nextButton.disabled = true
    
    submitButton.disabled = true
  }


  time_remaining--;
 
}
function start(){
   interval = setInterval(quizTime,1000)
  startButton.disabled = true
  nextButton.disabled = false

}  





startButton.addEventListener('click',start)
// on submit, show results
submitButton.addEventListener('click', showResults);
nextButton.addEventListener('click',next)
