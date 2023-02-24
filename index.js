const buttons = document.querySelectorAll(".first-card__buttons--style")

const submitBtn = document.getElementById("submit-btn");

const rating = document.getElementById("rating");

const firstCard = document.getElementById("first");
const secondCard = document.getElementById("second")

submitBtn.addEventListener('click', () => {
    secondCard.classList.remove("hidden")
    firstCard.style.display = "none"
})

buttons.forEach((rate) => {
    rate.addEventListener('click', () => {
        rating.innerHTML = rate.innerHTML
    })
})