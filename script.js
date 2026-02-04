const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");

let messages = [
    "Are you sure? 😏",
    "Really? 🥺",
    "Try again! 😜",
    "You sure? 💔",
    "Haha nice try! 😎",
    "No escape! 😈",
    "Still no? Really? 😭",
    "You're testing my patience 😤",
    "You can't escape love 💘"
];

let index = 0;

// Move NO button randomly
noBtn.addEventListener("mouseover", () => {
    let x = Math.random() * 200 - 100;
    let y = Math.random() * 80 - 40;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;

    if (index < messages.length) {
        noBtn.innerText = messages[index];
        index++;
    } else {
        noBtn.innerText = "Just say YES 😘";
    }
});

// YES button click
yesBtn.addEventListener("click", () => {
    result.innerHTML = "Yayyy! 💖 I knew it! You are my Valentine! 💕🥰";
    document.querySelector(".buttons").style.display = "none";
});
