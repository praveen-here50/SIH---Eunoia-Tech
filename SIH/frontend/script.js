let nickname = "Guest"; // later replace with account nickname

const chatSection = document.getElementById("chatSection");
const chatPlaceholder = document.getElementById("chatPlaceholder");
const chatWindow = document.getElementById("chatWindow");
const chatRoomName = document.getElementById("chatRoomName");
const chatRoomDesc = document.getElementById("chatRoomDesc");
const messages = document.getElementById("messages");
const msgInput = document.getElementById("msgInput");
const sendBtn = document.getElementById("sendBtn");
const fullscreenBtn = document.getElementById("fullscreenBtn");

const roomDescriptions = {
  "🎓 Exam Stress Support": "Share worries about exams and get encouragement.",
  "🌙 Sleep & Relaxation": "Discuss sleep problems and calming techniques.",
  "⚖ Work-Life Balance": "Talk about managing studies, work, and personal life.",
  "💚 Anxiety Relief": "A safe space to talk about anxiety and coping strategies."
};

function openChat(room) {
  chatPlaceholder.classList.add("hidden");
  chatWindow.classList.remove("hidden");

  chatRoomName.textContent = room;
  chatRoomDesc.textContent = roomDescriptions[room] || "";

  messages.innerHTML = `<div class="bubble other">System: Welcome ${nickname} to ${room}</div>`;
}

function sendMessage() {
  const text = msgInput.value.trim();
  if (text === "") return;

  const bubble = document.createElement("div");
  bubble.classList.add("bubble", "user");
  bubble.textContent = nickname + ": " + text;
  messages.appendChild(bubble);

  messages.scrollTop = messages.scrollHeight;
  msgInput.value = "";
}

sendBtn.addEventListener("click", sendMessage);
msgInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

fullscreenBtn.addEventListener("click", () => {
  chatSection.classList.toggle("fullscreen");
});

// Placeholder handlers for nav
function showFeatured() {
  document.getElementById("roomSection").innerHTML = `
    <h2>Featured Rooms</h2>
    <div class="room-card" onclick="openChat('🎓 Exam Stress Support')">🎓 Exam Stress Support</div>
    <div class="room-card" onclick="openChat('🌙 Sleep & Relaxation')">🌙 Sleep & Relaxation</div>
    <div class="room-card" onclick="openChat('⚖ Work-Life Balance')">⚖ Work-Life Balance</div>
    <div class="room-card" onclick="openChat('💚 Anxiety Relief')">💚 Anxiety Relief</div>
  `;
}

function showSupport() {
  document.getElementById("roomSection").innerHTML = `
    <h2>1:1 Support</h2>
    <p>Private chats with a peer or mentor will appear here.</p>
  `;
}

function showAccount() {
  document.getElementById("roomSection").innerHTML = `
    <h2>Your Account</h2>
    <p>Nickname: ${nickname}</p>
    <p>Profile Picture: [upload option coming soon]</p>
  `;
}
