// 🌟 Console Greeting
console.log("%cWelcome to Maliti Hassan’s Portfolio!", "color: teal; font-size: 16px; font-weight: bold;");

// ✨ Scroll Reveal Animation
const revealOnScroll = () => {
    const sections = document.querySelectorAll("section, header, footer");
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            section.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll); // Trigger on page load

// 💬 Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});
// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Web Developer", "Creative Writer", "Tech Enthusiast"];
const typingDelay = 100;
const erasingDelay = 60;
const newTextDelay = 1500; // delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 500);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) setTimeout(type, newTextDelay);
});


