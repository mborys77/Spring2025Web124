// Matthew Borys 3/10/25
// Chapter 2 
let myName = "Matthew Borys";
let para1 = document.getElementById("p1");
para1.textContent = myName;

let n1 = 3;
let n2 = 9;
numberSum = n1 + n2;
document.getElementById("p2").textContent = numberSum;

numberMult = n2 * n1;
document.getElementById("p3").textContent = numberMult;

myNameAddNum = myName + numberSum
document.getElementById("p4").textContent = myNameAddNum;

myNameMultNum = numberSum * numberMult

document.getElementById("p5").textContent = myNameMultNum;

let myAge = 20;
let ageCompare = myAge < numberMult;
document.getElementById("p6").textContent = ageCompare;