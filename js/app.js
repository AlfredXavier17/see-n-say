// Assignment 1 | COMP1073 Client-Side JavaScript
/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
const synth = window.speechSynthesis;

const speakButton = document.getElementById("speak");
const noun1Button = document.getElementById("noun1");
const verbButton = document.getElementById("verb");
const adjectiveButton = document.getElementById("adjective");
const noun2Button = document.getElementById("noun2");
const placeButton = document.getElementById("place");
const resetButton = document.getElementById("reset");
const randomButton = document.getElementById("random");
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
let textToSpeak = "";

let noun1 = "";
let verb = "";
let adjective = "";
let noun2 = "";
let place = "";

const nouns1 = [
  "The turkey",
  "Mom",
  "Dad",
  "The dog",
  "My teacher",
  "The elephant",
  "The cat",
];
const verbs = ["sat on", "ate", "danced with", "saw", "dosen't like", "kissed"];
const adjectives = [
  "a funny",
  "a scary",
  "a goofy",
  "a slimy",
  "a barking",
  "a fat",
];
const nouns2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const places = [
  "on the moon",
  "on the chair",
  "in my spaghetti",
  "in my soup",
  "on the grass",
  "in my shoes",
];

/* Functions
-------------------------------------------------- */

// selects random word from any of the array
function selectRandomWord(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// function to update the textToSpeak
function updateTextToSpeak() {
  textToSpeak = `${noun1} ${verb} ${adjective} ${noun2} ${place}`;
}

function speakNow(string) {
  // Create a new speech object, attaching the string of text to speak
  const utterThis = new SpeechSynthesisUtterance(string);
  // Actually speak the text
  synth.speak(utterThis);
}

function resetTextToSpeak() {
  noun1 = "";
  verb = "";
  adjective = "";
  noun2 = "";
  place = "";
  textToSpeak = "";
}

function formRandomSentence() {
  noun1 = selectRandomWord(nouns1);
  verb = selectRandomWord(verbs);
  adjective = selectRandomWord(adjectives);
  noun2 = selectRandomWord(nouns2);
  place = selectRandomWord(places);
  updateTextToSpeak();
}
/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener("click", () => {
  noun1 = selectRandomWord(nouns1);
  updateTextToSpeak();
});

verbButton.addEventListener("click", () => {
  verb = selectRandomWord(verbs);
  updateTextToSpeak();
});
adjectiveButton.addEventListener("click", () => {
  adjective = selectRandomWord(adjectives);
  updateTextToSpeak();
});
noun2Button.addEventListener("click", () => {
  noun2 = selectRandomWord(nouns2);
  updateTextToSpeak();
});

placeButton.addEventListener("click", () => {
  place = selectRandomWord(places);
  updateTextToSpeak();
});

// reset button to reset the textToSpeak var
resetButton.addEventListener("click", () => {
  resetTextToSpeak();
});

// form a random sentence
randomButton.addEventListener("click", () => {
  formRandomSentence();
});

// The click event handler for the button that speaks the text contained in the above var textToSpeak
speakButton.addEventListener("click", function () {
  speakNow(textToSpeak);
});
