// Background floating hearts
const heartsContainer = document.getElementById("hearts-container");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";
  heart.style.fontSize = Math.random() * 15 + 15 + "px";
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 400);

// Smooth background music fade-in
const music = document.getElementById("bg-music");
music.volume = 0;
let fade = setInterval(() => {
  if (music.volume < 1.0) music.volume += 0.02;
  else clearInterval(fade);
}, 200);
