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




document.getElementById("q1-toggle").addEventListener("click", function () {
    showHideAnswer(answer1, toggleButton1);
});

document.getElementById("q2-toggle").addEventListener("click", function () {
    showHideAnswer(answer2, toggleButton2);
});

document.getElementById("q3-toggle").addEventListener("click", function () {
    showHideAnswer(answer3, toggleButton3);
});

document.getElementById("q4-toggle").addEventListener("click", function () {
    showHideAnswer(answer4, toggleButton4);
});
