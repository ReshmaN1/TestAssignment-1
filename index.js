const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "";
question = "Who was the first American woman in space?" ;  
let correctAnswer="Sally Ride";
let candidateAnswer;

let correctAnswers;
let candidateAnswers;
runProgram ();




function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Enter your Name :");

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  let questions  = ["Who was the first American woman in space?", "True or false: 5 kilometer == 5000 meters?",
"(5 + 3)/2 * 10 = ?"  ,"given  the  array [8, , 45]", "what entry is at index 2?" ,	"What is the minimum crew size for the ISS"];
let correctAnswer = ["Sally Ride" , "True" , "40" ,"Trajectory","3"];
let candidateAnswer = [];
  candidateAnswer = input.question(question);
  for(let i=o ; i < questions, lenght; i++){
    //console.log(i+":"+question[i]);
    candidateAnswer[i] = input, question(questions[i]);
    //process intensive math calculate here
  }
}

function gradeQuiz(candidateAnswers) {


  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  if(candidateAnswer == correctAnswer){
   
  }
  console.log(question);
  console.log("Your Answer:"+candidateAnswer);
  console.log("Correct Answer:"+correctAnswer);

  let grade=100;
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Welcome "+candidateName);
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};