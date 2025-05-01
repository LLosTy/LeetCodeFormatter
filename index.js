#!/usr/bin/env node
//The line above makes the code run using node
// shebang line: the very first line in an executable plain-text file on Unix-like platforms that tells the system what
// interpreter to pass that file to for execution, via the command line following the magic #! prefix (called shebang).

const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

function format(input) {
  let formatted = [];

  input = input.split(" ");

  input[0] = input[0].replace(".", "-");

  for (word of input) {
    word = word.replace(word[0], word[0].toUpperCase());
    formatted += word;
  }
  console.log(formatted);
  return formatted;
}

rl.question("Insert LeetCode problem with number: ", (input) => {
  console.log(`Formatted: ${format(input)} `);

  rl.close();
});
