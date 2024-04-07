#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let myBalance = 20000;
let myPin = 1020;
let pinAnswer = await inquirer_1.default.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Welcome to your account!!!");
    let operationAns = await inquirer_1.default.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer_1.default.prompt([
            {
                name: "amount",
                message: "enter your account",
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("insufficent balance");
        }
        else if (myBalance -= amountAns.amount) {
            console.log(`your remaining amount is ${myBalance} `);
        }
    }
    if (operationAns.operation === "fast cash") {
        let fastCashAns = await inquirer_1.default.prompt([
            {
                name: "fastcash",
                message: "your fastcash account is",
                type: "list",
                choices: ["1000", "2000", "5000", "10000"]
            }
        ]);
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your current balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin code!!!");
}
