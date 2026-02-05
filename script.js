// SET BIRTHDAY DATE (YYYY-MM-DD)
const birthday = new Date("February 8, 2026 00:00:00").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const enterBtn = document.getElementById("enterBtn");

const countdownPage = document.getElementById("countdownPage");
const surprisePage = document.getElementById("surprisePage");

// COUNTDOWN TIMER
const timer = setInterval(() => {
    const now = new Date().getTime();
    const diff = birthday - now;

    if (diff <= 0) {
        clearInterval(timer);
        enterBtn.disabled = false;
        return;
    }

    daysEl.textContent = Math.floor(diff / (1000 * 60 * 60 * 24));
    hoursEl.textContent = Math.floor((diff / (1000 * 60 * 60)) % 24);
    minutesEl.textContent = Math.floor((diff / (1000 * 60)) % 60);
    secondsEl.textContent = Math.floor((diff / 1000) % 60);
}, 1000);

// OPEN SURPRISE
enterBtn.addEventListener("click", () => {
    countdownPage.classList.add("hidden");
    surprisePage.classList.remove("hidden");
    startHearts();
});

// HEART ANIMATION
function startHearts(){
    const container = document.querySelector(".hearts");
    setInterval(() => {
        const heart = document.createElement("span");
        heart.innerHTML = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 6000);
    }, 350);
}
