const readline = require('readline');
process.stdin.setRawMode(true);
process.stdout.setEncoding('utf-8');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const surveyQuestions = [
  // add dead spaces at the end so a space is present in terminal line
  "What is your name?",
  "What is an activity you enjoy doing? ",
  "What do you listen to while doing that? ",
  "Which meal is your favorite of the day? ",
  "What is your favorite thing to eat for the meal? ",
  "What is your favorite sport to play? ",
  "What is your superpower? In a few words, tell us whaat you're amazing at "
];

let surveyAnswers = []; //push everything to empty array for the profile template literal at the end

const nextQuestion = () => {
  rl.question(surveyQuestions.shift(), answer => {
    //use shift to remove and return first element of array.
    surveyAnswers.push(answer);
    if (surveyQuestions.length === 0) { //after shift has emptied array, it will close this loop
      rl.close();
    } else {
      nextQuestion(); //if array still has contents (!== 0), use recursion to run again.
    }
  });
};

nextQuestion();

rl.on('close', () => {
  surveyAnswers = {
    name: surveyAnswers[0],
    favActivity: surveyAnswers[1],
    favGenre: surveyAnswers[2],
    favMeal: surveyAnswers[3],
    favFood: surveyAnswers[4],
    favSport: surveyAnswers[5],
    superpower: surveyAnswers[6]
  };

  let profile = `My name is ${surveyAnswers.name} and my favorite activity is ${surveyAnswers.favActivity}! My favorite type of music to listen to while doing that is ${surveyAnswers.favGenre}. My favorite meal of the day is ${surveyAnswers.favMeal} and I love having ${surveyAnswers.favFood} for it! I love playing ${surveyAnswers.favSport} above all else and my superpower is ${surveyAnswers.superpower}.`;

  console.log(profile)
});