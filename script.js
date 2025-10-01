// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
// Simple demo chatbot
const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatlog = document.getElementById("chatlog");

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;
  chatlog.appendChild(msg);
  chatlog.scrollTop = chatlog.scrollHeight;
}

function botReply(userText) {
  let reply;
  
  // Basic rules
  if (/hello|hi/i.test(userText)) {
    reply = "Hi there! 👋 I’m Scott’s CV chatbot. How can I help?";
  } else if (/experience/i.test(userText)) {
    reply = "Scott is currently an intern at HPE, analysing partner performance and supporting channel sales.";
  } else if (/education/i.test(userText)) {
    reply = "Scott is studying Economics at Nottingham Business School and achieved a 1st in his 2nd year.";
  } else if (/skills/i.test(userText)) {
    reply = "Key skills: Data analysis, leadership, financial modelling, and communication.";
  } else {
    reply = "I’m just a demo chatbot 🤖. Ask me about Scott’s experience, education, or skills!";
  }
  
  addMessage(reply, "bot");
}

sendBtn.addEventListener("click", () => {
  const text = userInput.value.trim();
  if (text) {
    addMessage(text, "user");
    botReply(text);
    userInput.value = "";
  }
});

userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendBtn.click();
});

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // trigger only once
    }
  });
}, { threshold: 0.2 });

faders.forEach(el => observer.observe(el));
