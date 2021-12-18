import { Scorpion } from './bugs/Scorpion';
// import inquirer from 'inquirer';

const bug = new Scorpion();

console.log(`Consulting the Tao... FREEZE`);
const bugString = bug.toString();

console.log(`Here is your bug's position:`);
console.log(bugString);

