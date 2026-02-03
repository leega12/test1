const themeToggle = document.getElementById("theme-toggle");

// Theme toggle functionality
function initTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.documentElement.setAttribute("data-theme", savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.setAttribute("data-theme", "dark");
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    if (newTheme === "light") {
        document.documentElement.removeAttribute("data-theme");
    } else {
        document.documentElement.setAttribute("data-theme", newTheme);
    }
    localStorage.setItem("theme", newTheme);
}

themeToggle.addEventListener("click", toggleTheme);
initTheme();

// Lotto number generator (only on index page)
const generateBtn = document.getElementById("generate-btn");
const numberSpans = document.querySelectorAll(".number");

if (generateBtn && numberSpans.length > 0) {
    function generateNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }
        return Array.from(numbers);
    }

    function displayNumbers() {
        const numbers = generateNumbers();
        numberSpans.forEach((span, index) => {
            span.textContent = numbers[index];
            span.className = 'number';
            const num = numbers[index];
            if (num <= 10) {
                span.classList.add('yellow');
            } else if (num <= 20) {
                span.classList.add('blue');
            } else if (num <= 30) {
                span.classList.add('red');
            } else if (num <= 40) {
                span.classList.add('gray');
            } else {
                span.classList.add('green');
            }
        });
    }

    generateBtn.addEventListener("click", displayNumbers);
    displayNumbers();
}
