#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 20000;
let myPin = 1020;

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "enter your pin",
            type: "number"
        }

    ]
);

if(pinAnswer.pin === myPin){
    console.log("Welcome to your account!!!");

let operationAns = await inquirer.prompt(
    [
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw" , "check balance" , "fast cash"]
        }
    ]
);

if(operationAns.operation === "withdraw"){
    let amountAns = await inquirer.prompt(
        [
            {
                name: "amount",
                message: "enter your account",
                type: "number"
            }
        ]
    );
if(amountAns.amount > myBalance){
    console.log("insufficent balance")
}
else if(myBalance -= amountAns.amount){
    console.log(`your remaining amount is ${myBalance} `);
}
}

if(operationAns.operation === "fast cash"){
    let fastCashAns = await inquirer.prompt(
        [
            {
                name: "fastcash",
                message: "your fastcash account is",
                type: "list",
                choices: ["1000","2000","5000","10000"]
            }
        ]
    )
}else if(operationAns.operation === "check balance"){
    console.log(`your current balance is ${myBalance}`);}
}
else{
    console.log("Incorrect pin code!!!");
}
