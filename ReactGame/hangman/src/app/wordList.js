//Task:                Hangman
//Assigned to:         Admin
//Date assigned:       10th June 2023
//Due date:            10th June 2023
//Task complete?       Yes
//Task description:    Create an game called Hangman


// Below are the words the game will use. 
var WordList = [
    "piano",
    "math",
    "coding",
    "school",
    "adverb",
    "computer",
    "butter",
    "simple",
    "axe",
    "metal",
    "conjunction",
    "apple",
    "course",
    "study",
    "project",
    "hero",
    "start",
];

function generator() {
    return WordList[Math.floor(Math.random() * WordList.length)];
}

export {generator};