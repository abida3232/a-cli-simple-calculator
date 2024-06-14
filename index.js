#!/usr/bin/env node
//shabang
import inquirer from "inquirer";
let answers = await inquirer.prompt([
    { message: "enter your first number", type: "number", name: "firstnumber" },
    { message: "enter your second number", type: "number", name: "secondnumber" },
    {
        message: "select one operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"]
    },
]);
//if else condions apply
if (answers.operator === "addition") {
    console.log(answers.firstnumber + answers.secondnumber);
}
else if (answers.operator === "subtraction") {
    console.log(answers.firstnumber - answers.secondnumber);
}
else if (answers.operator === "multiplication") {
    console.log(answers.firstnumber * answers.secondnumber);
}
else if (answers.operator === "division") {
    console.log(answers.firstnumber / answers.secondnumber);
}
else {
    console.log("invalid input");
}
;
