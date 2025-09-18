let duration = 0;
let timer;
let running = false;
let isStudy = true;
const fullCircle = 2 * Math.PI * 90; // r = 90

function updateTimeDisplay() {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  document.getElementById("time").textContent =
    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  const progress = document.getElementById("progress");
  const total = isStudy
    ? parseInt(document.getElementById("studyTime").value) * 60
    : parseInt(document.getElementById("breakTime").value) * 60;
  const offset = fullCircle - (duration / total) * fullCircle;
  progress.style.strokeDashoffset = offset;
}

function startTimer() {
  if (running) return;
  running = true;

  const studyMinutes = parseInt(document.getElementById("studyTime").value);
  const breakMinutes = parseInt(document.getElementById("breakTime").value);

  duration = isStudy ? studyMinutes * 60 : breakMinutes * 60;
  updateTimeDisplay();

  timer = setInterval(() => {
    if (duration > 0) {
      duration--;
      updateTimeDisplay();
    } else {
      clearInterval(timer);
      running = false;
      document.getElementById("alarm").play();
      showQuote();
      isStudy = !isStudy;
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  running = false;
  isStudy = true;
  duration = parseInt(document.getElementById("studyTime").value) * 60;
  updateTimeDisplay();
}

function showQuote() {
  const quotes = [
    "“Small steps every day lead to big results.”",
    "“You’re doing great—keep going.”",
    "“Rest is productive too.”",
    "“Focus is a skill. You’re building it.”"
  ];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").textContent = quote;
}

resetTimer();