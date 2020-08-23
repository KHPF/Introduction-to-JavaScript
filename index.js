/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 18

if(votingAge>18){
    console.log(true)
}



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let name ="Faisal"
let age = 21

if(name === 'Faisal'){
name =age
}







//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

var a = parseInt("1999");
console.log(a);



//Task d: Write a function to multiply a*b 

function multiply(a,b){
    result= a * b;
    console.log(result)
} 

multiply(2,2)



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

let myAge = 22;
// earlyYears is 2.
let earlyYears = 2;
  earlyYears *= 10.5
// subtracts 2 from myAge and sets results equal to laterYears.
let laterYears = myAge - 2
//multiplies laterYears by 4.
  laterYears *= 4;
// adds earlyYears and laterYears, saves results in the variable called myAgeInDogYears.
let myAgeInDogYears = earlyYears + laterYears;
// changes Faisal to faisal
let myName = 'Faisal'.toLowerCase();
//should print to the console My name is faisal. I am 22 years old  in human years which is 101 years old in dog years.
console.log(`My name is ${myName}. I am ${myAge} years old  in human years which is ${myAgeInDogYears} years old in dog years.`);




/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function dogFeeder(dogYears,dogWeight){
    if(dogYears >=1 && dogWeight === 5){
        return dogWeight * .05;
    } else if(dogYears >=1 && 10>= dogWeight >=6){
        return dogWeight * .04;
    } else if(dogYears >=1 && dogWeight >=11){
        return dogWeight * .03;
    }else if(dogYears >=1 && dogWeight ===15){
        return dogWeight * .02;
    }else if(dogYears>= ((1/12) *2) && dogYears< ((1/12) *4)){
        return dogWeight * .1;
    }else if(dogYears>= ((1/12) *4) && dogYears< ((1/12) *7)){
        return dogWeight * .05;
    }else if(dogYears>= ((1/12) *7) && dogYears< ((1/12) *12)){
        return dogWeight * .04;
    }
}

    console.log(dogFeeder(1,15))



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
  if(userInput ==='rock', 'paper',
  'scissors','bomb'){
    return userInput;
    } else{
      console.log('Error');
    }
  }
  
  const getComputerChoice = () => {
   let randomNumber=Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0 :
      return 'rock'
      break;
      case 1 :
      return 'paper'
      case 2 :
      return 'scissors'
      break;
      default :
      break;
    }
  }
  
  const determineWinner = function(userChoice,computerChoice){
    if(userChoice === computerChoice){
      return 'The game was a tie!';
    }
  if(userChoice === 'bomb'){
    return 'BOOM YOU WON!!!!!!!'
  }
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
  return 'The computer won!';
    } else{
      return 'You Won!';
    }
  }
  if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'The computer won!'
    } else{
      return 'You won!'
    }
  }
  if(userChoice === 'scissors'){
    if(computerChoice === 'rock' ){
  return 'The computer won!'
    } else{
      return 'You won!'
    }
  }
  }
  
  const playGame = () => {
     const userChoice =
    getUserChoice('rock');
     const computerChoice=
    getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
  }
  playGame();
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

// taking kilometers input from the user
function convertToMiles(km){
    console.log(km * 0.621371);
}

convertToMiles(100)

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function convertToCm(Ft){
    console.log(Ft * 30.48)
}

convertToCm(100)


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
function aSong(bottles){
for (bottles >= 1; bottles--;){
    console.log(bottles, "bottles of soda on the wall,", bottles, "bottles of soda,take one down pass it around", bottles, "bottles of soda on the wall")
  }
}
aSong();


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F

function gradeCalc(grade){
    if(grade === 90){
        console.log("A")
    }else if(grade === 80){
        console.log("B")
    }else if(grade === 70){
        console.log("C")
    }else if(grade === 60){
        console.log("D")
    }else if(grade < 60){
        console.log("Sorry you got a graded F")
    }else{
        console.log("Yay A+")
    }
}
  
gradeCalc()

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





