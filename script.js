let clubName = "Pilates Princess club";
console.log("Welcome to " + clubName);

let meetingDay = "We meet on Mondays"
console.log(meetingDay);

//declare or define function
function sayHi() {
  console.log("Hi! Thanks for visiting.");
}

//call the function
sayHi();

function sayBye(){
  console.log("Goodbye! See you next time.");
}
sayBye();
sayBye();

let nextButton = document.querySelector("#next-btn");
let nextMeeting = document.querySelector("#next-meeting");

function showNextMeeting() {
  nextMeeting.textContent = "Our next meeting is Sunday, November 8 at 3 PM.";
}

nextButton.addEventListener("click", showNextMeeting);

let themeButton = document.querySelector("#theme-btn");

function toggleTheme() {
  document.body.classList.toggle("dark");
}

themeButton.addEventListener("click", toggleTheme);