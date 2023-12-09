const form = document.getElementById("quiz-form");
const elements = document.getElementsByClassName("question-item");
const alert = document.getElementById("alert");

form.addEventListener("submit", (event) => {
    event.preventDefault()
//partie où les réponses répondues sont bon ou non
    let score = 0;
    for (const element of elements) {
        const awnser = element.querySelector("input:checked")

        if (awnser) {
            if (awnser.value === "true") {
                element.classList = "question-item correct"
                score++
            } else {
                element.classList = "question-item incorrect"
            }
        }
    }
// affidhage du texte quand toutes les réponses sont correctes
    if (score === 3) {
        alert.setAttribute("style", "display: block")
    } else {
        alert.setAttribute("style", "display: none")
    }
});