// MedStart Academy JavaScript

let xp = 0;
let level = 1;

function addXP(amount) {
xp += amount;

if (xp >= level * 100) {
level++;
alert("🎉 Level Up! You are now Level " + level);
}

console.log("XP:", xp);
}


// Course button actions

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

button.addEventListener("click", function() {

if (button.innerText === "Start Course") {

addXP(50);

alert(
"📖 Welcome to Month 1: Medical Terminology!\n\nYour first lesson is coming soon."
);

}

else if (button.innerText === "Locked") {

alert(
"🔒 This course is locked.\n\nComplete previous courses to unlock it."
);

}

});

});

console.log("🩺 MedStart Academy is running!");
