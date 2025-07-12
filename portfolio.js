// 1. Greeting based on time
const greeting = document.getElementById("greeting");
const hour = new Date().getHours();
if (hour < 12) {
  greeting.textContent = "Good Morning!";
} else if (hour < 18) {
  greeting.textContent = "Good Afternoon!";
} else {
  greeting.textContent = "Good Evening!";
}

// 2. Back to Top Button
const topBtn = document.getElementById("topBtn");
window.onscroll = () => {
  if (document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};
topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// 3. Toggle Dark/Light Mode
const toggleBtn = document.getElementById("themeToggle");
toggleBtn.onclick = () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
};
