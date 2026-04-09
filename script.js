// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Button Click
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Welcome to QuantX 🚀");
  });
});