// script.js
const chatBox = document.getElementById('chat-box');
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');

chatForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const message = userInput.value.trim();
  if (!message) return;

  appendMessage('user', message);
  userInput.value = '';

  const response = await getAIResponse(message);
  appendMessage('ai', response);
});

function appendMessage(sender, text) {
  const msg = document.createElement('div');
  msg.classList.add('message', sender);
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function getAIResponse(message) {
  // Simulated response for demo purposes
  if (message.toLowerCase().includes('lesson plan')) {
    return "Sure! What grade and subject are you planning for?";
  } else if (message.toLowerCase().includes('student engagement')) {
    return "Try incorporating interactive activities like group discussions or gamified quizzes!";
  } else {
    return "I'm here to help with teaching strategies, planning, and more. Ask me anything!";
  }
}
