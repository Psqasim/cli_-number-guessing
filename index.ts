#!/usr/bin/env node
import inquirer from "inquirer";

//step 1: computer will genrate a random number
//stet 2: user input for guesing number
//step 3: compare user input with computer genrated number and show results
console.log("WELCOME,HI I AM MUHAMMAD QASIM");

const randomNumber=Math.floor(Math.random()*6+1);



const answers = await inquirer.prompt([
    {
        name:"userGuessNumber",
        type:"number",
        message:"please guess a number,hint(guess number 1 to 6):",

    },
]);
if(answers.userGuessNumber === randomNumber){
console.log("You Are Right You Guess Right Number.");
}
else{
    console.log("No You Guess wrong");
}
