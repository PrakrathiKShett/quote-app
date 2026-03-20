const quotes = [
    "Success is not final, failure is not fatal.",
    "Push yourself, because no one else will.",
    "Dream big. Start small. Act now.",
    "Your only limit is your mind.",
    "Do something today your future self will thank you for.",
    "Great things never come from comfort zones."
];

function newQuote() {
    let random = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[random];
}

function shareQuote() {
    let text = document.getElementById("quote").innerText;
    navigator.clipboard.writeText(text);
    alert("Quote copied! Share it anywhere.");
}