// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";
import { getDatabase, ref, onChildAdded } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw4g1pnLurRbgytXQnhoLdJuVchRxxeVs",
  authDomain: "quizeappwithfirebase-3f17e.firebaseapp.com",
  projectId: "quizeappwithfirebase-3f17e",
  storageBucket: "quizeappwithfirebase-3f17e.appspot.com",
  messagingSenderId: "23455302663",
  appId: "1:23455302663:web:7f9d5419bca66eb47ed6a2",
  measurementId: "G-DV6FJLJXTR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

var loader = document.getElementById('loader')
var showQuestion = document.getElementById('showQuestion')


function getDataFromDatabase(){
  loader.style.display = 'block'
  showQuestion.style.display = 'none'
  
  const reference = ref(db, 'questions/')
  onChildAdded(reference, function (data){
    console.log(data.val())
    questions.push(data.val())
    loader.style.display = 'none'
    showQuestion.style.display = 'block'

    renderQuestion()
    
  })
}
getDataFromDatabase()


var questions = [];
//   {
//     question: " Which type of JavaScript language is?",
//     options: [
//       "Object-Oriented.",
//       "Object-Based.",
//       "Assembly-language.",
//       "High-level",
//     ],
//     correctAns: "Object-Based.",
//   },
//   {
//     questions:
//       "Which one of the following also known as Conditional Expression?",
//     options: [
//       "Alternative to if-else",
//       "Switch statement",
//       "If-then-else statement",
//       "immediate if",
//     ],
//     correctAns: "immediate if",
//   },
//   {
//     questions: "Which of the following keywords is used to define a variable in Javascript?",
//     options: [
//       "var",
//       "let",
//       "Both A and B",
//       "None of the above",
//     ],
//     correctAns:
//       "Both A and B",
//   },
//   {
//     questions: "The 'Function' and 'var' are known as?",
//     options: ["Keywords", "Data types", "Declaration statements", "Prototypes"],
//     correctAns: "Declaration statements",
//   },
//   {
//     questions:
//       "Which of the following variables takes precedence over the others if the names are the same?",
//     options: [
//       "Global variable.",
//       "The local element.",
//       "The two of the above.",
//       "None of the above",
//     ],
//     correctAns: "The local element",
//   },
//   {
//     questions: "Which of the following type of a variable is volatile?",
//     options: [
//       "Mutable variable",
//       "Dynamic variable",
//       "Volatile variable",
//       "Immutable variable",
//     ],
//     correctAns: "Mutable variable",
//   },
//   {
//     questions:
//       "In the JavaScript, which one of the following is not considered as an error?",
//     options: [
//       "Syntax error.",
//       "Missing of semicolons.",
//       "Division by zero.",
//       "Missing of Bracket.",
//     ],
//     correctAns: "Division by zero.",
//   },
//   {
//     questions:
//       "Which of the following givenfunctions of the Number Object formats a number with a different number of digits to the right of the decimal?",
//     options: [
//       "toExponential()",
//       "toFixed()",
//       "toPrecision()",
//       "toLocaleString()",
//     ],
//     correctAns: "toFixed().",
//   },
//   {
//     questions:
//       "Which of the following number object function returns the value of the number?",
//     options: [
//       "toString().",
//       "valueOf().",
//       "toLocaleString().",
//       "toPrecision().",
//     ],
//     correctAns: "valueOf().",
//   },
//   {
//     questions:
//       "Which of the following function of the String object returns the character in the string starting at the specified position via the specified number of characters?",
//     options: ["slice().", "split().", "substr().", "search()."],
//     correctAns: "substr().",
//   },
// ];

var currentQuestion = document.getElementById("currentQuestion");
var totalQuestion = document.getElementById("totalQuestion");
var question = document.getElementById("question");
var answerParent = document.getElementById("answerParent");

var indexNumber = 0;
var score = 0;

window.checkQuestion = function (a, b){
  if (a == b){
    score ++
    console.log(score)
  }
  nextQuestion()
}

window.nextQuestion = function (){
  if (indexNumber + 1 == questions.length){
    alert("Your Score is: " + score)
    }else {
      indexNumber++
      renderQuestion()
    }
}

function renderQuestion() {
  currentQuestion.innerHTML = indexNumber + 1;
  totalQuestion.innerHTML = questions.length;
  // question.innerHTML = questions[0].question

  var obj = questions[indexNumber];

  question.innerHTML = obj.question;

  answerParent.innerHTML = ``
  for (var i = 0; i < obj.options.length; i++) {
    answerParent.innerHTML += `<div class="col-md-4">
    <div class="py-2">
        <button onclick="checkQuestion('${obj.options[i]}', '${obj.correctAnswer}')" class="btn btn-dark fs-4 rounded-pill w-100">
            ${obj.options[i]}
        </button>
    </div>
  </div>`;
  }
}
renderQuestion();


