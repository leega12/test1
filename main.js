
const generateBtn = document.getElementById("generate-btn");
const numberSpans = document.querySelectorAll(".number");

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
        span.className = 'number'; // Reset classes
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

// Initial generation
displayNumbers();
