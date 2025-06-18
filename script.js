const startDate = new Date("2025-04-18T00:00:00").getTime();

function updateLoveTime() {
  const now = new Date().getTime();
  const elapsed = now - startDate;

  const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
  const hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

  document.getElementById("count").innerText =
    `It's been ${days} days, ${hours} hrs, ${minutes} min, ${seconds} sec 💞`;
}

setInterval(updateLoveTime, 1000);
updateLoveTime();

function updateCurrentDateTime() {
  const now = new Date();

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  };

  const formatted = now.toLocaleString('en-US', options);
  document.getElementById("live-date-time").innerText = `Today is ${formatted} 💌`;
}

setInterval(updateCurrentDateTime, 1000);
updateCurrentDateTime();

// Floating Heart Emojis
function createLoveHeart() {
  const heart = document.createElement("div");
  heart.className = "love-heart";

  // 🌈 All available heart emojis with native colors
  const symbols = [
    "❤️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🤍",
    "💖", "💘", "💝", "💞", "💗", "💓", "💕"
  ];
  heart.innerText = symbols[Math.floor(Math.random() * symbols.length)];

  // 💡 No need for color styling — native emojis are pre-colored!
  // But we'll still randomize size and float position
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (40 + Math.random() * 40) + "px";
  heart.style.animationDuration = (4 + Math.random() * 3) + "s";

  document.getElementById("love-hearts-container").appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}

setInterval(createLoveHeart, 600);
