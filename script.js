// Raksha Bandhan interactive effects

const music = document.getElementById("rakhiMusic");
const musicControl = document.getElementById("musicControl");
const musicLabel = document.getElementById("musicLabel");

musicControl.addEventListener("click", async () => {
  try {
    if (music.paused) {
      await music.play();
      musicControl.classList.add("playing");
      musicLabel.textContent = "Playing";
    } else {
      music.pause();
      musicControl.classList.remove("playing");
      musicLabel.textContent = "Play Music";
    }
  } catch (err) {
    musicLabel.textContent = "Tap again";
    console.log(err);
  }
});

// Falling golden petals / confetti
const petals = document.getElementById("petals");
const symbols = ["✦", "✧", "•", "❋"];

function createPetal() {
  const petal = document.createElement("span");
  petal.className = "petal";
  petal.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = (5 + Math.random() * 6) + "s";
  petal.style.fontSize = (8 + Math.random() * 10) + "px";
  petal.style.opacity = .25 + Math.random() * .5;
  petals.appendChild(petal);
  setTimeout(() => petal.remove(), 12000);
}

setInterval(createPetal, 700);

// Heart button
const heartButton = document.getElementById("heartButton");
const heartMessage = document.getElementById("heartMessage");

heartButton.addEventListener("click", () => {
  heartMessage.textContent = "❤️ Heart sent to the world's best sister!";
  for (let i = 0; i < 18; i++) {
    setTimeout(() => createPetal(), i * 45);
  }
});

// Smooth reveal for sections
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  ".opening, .story, .quote-inner, .memory-grid figure, .rakhi-copy, .letter-card"
).forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(28px)";
  el.style.transition = "opacity .9s ease, transform .9s ease";
  revealObserver.observe(el);
});
