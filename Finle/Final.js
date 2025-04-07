//Matthew Borys 12-04-2024

let choice;
// Start 
choice =
    prompt("What is your favorite season to run in? Click 1 for Spring, 2 for Summer, 3 for Fall, or 4 Winter"
  );

let seasonChoise = parseInt(choice);
const seasonOptions = ["Spring", "Summer", "Fall", "Winter",];
let ValidChoice = false;

  for (let i = 0; i < seasonOptions.length; i++) {
    if (seasonChoise === i + 1) {
      alert(seasonOptions[i] + "is a wonderfull season!" );
      console.log(seasonOptions[i] + "is a wonderfull season!" );
      ValidChoice = true;
      break;
    }
  }
  if (!ValidChoice && seasonChoise !== 6) {
    alert("Invalid choice, nextime please try a number between 1 and 4 now lets play");
    console.log("Invalid choice, nextime please try a number between 1 and 4 now lets play");
  } else if (seasonChoise === 6) {
    alert("Thank you for stopping by, join us in this next game, click `Play`");
    console.log("Thank you for stopping by, join us in this next game, click `Play`");
  }
  
// Weekley Run in miles and event listener 
  document.getElementById("calculate-btn").addEventListener("click", () => {
    const username = prompt("Enter runners name here:");
    if (!username) {
        alert("Name is required to proceed.");
        return;
        
    }

    const run = calcRunAvg();
    if (run !== null && !isNaN(run)) {
        const message = `${username}'s average weekly run in miles is ${run.toFixed(2)}`;
        confirm(message);
        document.getElementById("result").textContent = message;
        document.getElementById("result").style.color = "green";
        document.getElementById("result").style.fontSize = "x-large";
    } else {
        alert("No valid run miles info was added. Please try again.");
        document.getElementById("result").textContent = "Try Again. No valid data.";
        document.getElementById("result").style.color = "green";
        document.getElementById("result").style.fontSize = "x-large";
    }
});

function calcRunAvg() {
    let count = 0;
    let total = 0;

    for (
        let weeklyRun = parseFloat(prompt("Enter weekly log of run in miles:"));
        weeklyRun !== -1;
        weeklyRun = parseFloat(prompt("Enter miles or enter -1 to stop"))
    ) {
        console.log("Weekly miles entered:", weeklyRun);
        if (!isNaN(weeklyRun)) {
            total += weeklyRun;
            count++;
            console.log("Updated total:", total, "Count:", count);
        } else {
            console.log("Invalid input received:", weeklyRun);
            alert("Enter a valid number.");
        }
    }

    console.log("Final total:", total, "Final count:", count);
    return count > 0 ? total / count : null;
}

// Quiz short 
const answers = {
  option1: "Usain Bolt is the fastest person in the world!",
  option2: "Incorrect! The Flash is a fictional character",
  option3: "Incorrect! Breton Fraser is a fictional character from the Canadian show Due South",
  option4: "Incorrect! Terry Fox is Canadian athlete haveing had one leg amputated who ran across Canada to raise money and awareness for cancer."
};

function changeText(element) {
  const answer = answers[element.id]; 
  if (answer) {
      element.innerHTML = answer; 
      element.style.color = "blue"; 
  } else {
      console.log("No matching answer found for ID:", element.id);
  }
}

// Form 
function myFunction() {
  
  let x = document.getElementById("numb").value;
  
  let text;
  if (isNaN(x) || x < 1 || x > 25) {
    text = "Are you sure??? :/";
  } else {
    text = "Good luck youngling! Keep running :) ";
  }
  document.getElementById("traning").innerHTML = text;
}

document.getElementById("traning").style.color = "green";