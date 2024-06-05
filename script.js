function showHideAnswer(jsElement) {
    var currentDisplay = window.getComputedStyle(jsElement).display;

    // Toggle the display property based on its current value
    if (currentDisplay === "none") {
        jsElement.style.display = "inline";
    } else {
        jsElement.style.display = "none";
    }
}




const answer1 = document.getElementById("answer1");
const iconButton = document.getElementById("q1-toggle")

document.getElementById("q1-toggle").addEventListener("click", function () {
    showHideAnswer(answer1);
})