const answers = [
    "Maybe some day",
    "Nothing",
    "Neither",
    "I don't think so",
    "No",
    "Yes",
    "Try asking again",
    "Sure",
    "Okay",
    "Unclear",
    "Indubitably",
    "I didn't understand"

];

const answerBlock = document.getElementById("answer");

const submitButton = document.getElementById("bttn");

submitButton.addEventListener('click', conchAnswer);

function conchAnswer(){
    let pick = Math.floor(Math.random() * (6) );
    answerBlock.innerHTML = answers[pick];

}