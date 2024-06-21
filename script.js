function showHideAnswer(jsElement, toggleButton) {
    var currentDisplay = window.getComputedStyle(jsElement).display;

    // Toggle the display property based on its current value
    if (currentDisplay === "none") {
        jsElement.style.display = "inline";
        toggleButton.setAttribute('data-state', 'expanded');
    } else {
        jsElement.style.display = "none";
        toggleButton.setAttribute('data-state', 'collapsed');
    }
};




const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");

const toggleButton1 = document.getElementById("q1-toggle");
const toggleButton2 = document.getElementById("q2-toggle");
const toggleButton3 = document.getElementById("q3-toggle");
const toggleButton4 = document.getElementById("q4-toggle");

const question1 = document.getElementById("q1");
const question2 = document.getElementById("q2");
const question3 = document.getElementById("q3");
const question4 = document.getElementById("q4");



toggleButton1.addEventListener("click", function () {
    showHideAnswer(answer1, toggleButton1);
});

q1.addEventListener("click", function () {
    showHideAnswer(answer1, toggleButton1);
});

toggleButton2.addEventListener("click", function () {
    showHideAnswer(answer2, toggleButton2);
});
q2.addEventListener("click", function () {
    showHideAnswer(answer2, toggleButton2);
});

toggleButton3.addEventListener("click", function () {
    showHideAnswer(answer3, toggleButton3);
});

q3.addEventListener("click", function () {
    showHideAnswer(answer3, toggleButton3);
});

toggleButton4.addEventListener("click", function () {
    showHideAnswer(answer4, toggleButton4);
});

q4.addEventListener("click", function () {
    showHideAnswer(answer4, toggleButton4);
});
