let swapMode = false; // false = Letters to Numbers, true = Numbers to Letters

function letterToNumber(letter) {
    letter = letter.toUpperCase();
    if (/[A-Z]/.test(letter)) {
        return letter.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    }
    return letter;
}

function numberToLetter(number) {
    if (number >= 1 && number <= 26) {
        return String.fromCharCode(number + 'A'.charCodeAt(0) - 1);
    }
    return number;
}

function paragraphToNumbers(paragraph) {
    let result = '';
    for (let i = 0; i < paragraph.length; i++) {
        const letter = paragraph[i];
        const translatedLetter = letterToNumber(letter);
        if (typeof translatedLetter === 'number') {
            result += translatedLetter + ' ';
        } else {
            result += translatedLetter;
        }
    }
    return result.trim();
}

function numbersToParagraph(numbers) {
    let result = '';
    const numArray = numbers.split(/\s+/);
    for (const num of numArray) {
        const parsedNumber = parseInt(num, 10);
        if (!isNaN(parsedNumber)) {
            result += numberToLetter(parsedNumber);
        } else {
            result += num;
        }
    }
    return result;
}

function translateParagraph() {
    const inputText = document.getElementById("inputText").value;
    const translatedText = swapMode
        ? numbersToParagraph(inputText)
        : paragraphToNumbers(inputText);
    document.getElementById("outputText").value = translatedText;
}

function toggleMode() {
    swapMode = !swapMode;
    const toggleButton = document.getElementById("toggleButton");
    toggleButton.textContent = swapMode
        ? "Switch to Letters → Numbers"
        : "Switch to Numbers → Letters";
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("toggleButton").addEventListener("click", toggleMode);
    document.getElementById("translateButton").addEventListener("click", translateParagraph);
});
