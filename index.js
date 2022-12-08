//read input from user
var readlineSync = require('readline-sync');
//take username
var userName = readlineSync.question("What is your name? ");
console.log("welcome " + userName + " to do you know shweta?");
//count score 
var countScore = 0;
//check if user answer is valid or not
function checkAnswer(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() == answer.toUpperCase()) {
    console.log("Kudos to you!! ");
    countScore++;
    console.log("Current score: " + countScore);
  }
  else
    console.log("Better luck next time..");
  console.log("---------------------");
}

//arrray of objects
var questionList = [{
  question: "what is my pet name?",
  answer: "radha",
}, {
  question: "where do i live?",
  answer: "nagpur",
}, {
  question: "who is my favourite actor?",
  answer: "manoj bajpayee",
}, {
  question: "where do I work?",
  answer: "infosys",
}, {
  question: "what is favorite dish?",
  answer: "puranpoli",
}];

var highScore = [{
  Name: "Shweta",
  score: 5
}, {
  Name: "Vaishnavi",
  score: 4
}]

//call function using each object of array
for (var i = 0; i < questionList.length; i++) {
  checkAnswer(questionList[i].question, questionList[i].answer);
}
//total score
console.log("\nHey..You SCORED  " + countScore);
console.log("---------------------");
//Name of high scorers
console.log("\nName of High scorer:\n ")
for (var i = 0; i < highScore.length; i++) {
  console.log("Name: " + highScore[i].Name + "\nscore: " + highScore[i].score);
}
console.log("---------------------");
console.log("Remember to send me screenshot if you beat the score..\n I will update your name in high scorer list...")


