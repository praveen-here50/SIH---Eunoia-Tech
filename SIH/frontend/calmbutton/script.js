const steps = [
  { name: "Inhale...", duration: 4000 },
  { name: "Hold...", duration: 4000 },
  { name: "Exhale...", duration: 6000 }
];

const circle = document.getElementById('circle');
const stepText = document.getElementById('stepText');
const startBtn = document.getElementById('startBtn');
const endBtn = document.getElementById('endBtn');
const quoteDiv = document.getElementById('quote');

const startScreen = document.getElementById('startScreen');
const exerciseScreen = document.getElementById('exerciseScreen');
const completionScreen = document.getElementById('completionScreen');
const homeBtn = document.getElementById('homeBtn');
const againBtn = document.getElementById('againBtn');

const quotes = [
  "🌿 You got this!",
  "✨ Keep going, you're doing amazing.",
  "💚 Every breath makes you calmer.",
  "🌸 Stay present, stay peaceful.",
  "🌞 Relax, you're doing great."
];

let quoteInterval, exerciseTimeout;

startBtn.addEventListener('click', () => {
  startScreen.classList.remove('active');
  completionScreen.classList.remove('active');
  exerciseScreen.classList.add('active');

  // Start with small circle
  circle.style.width = "80px";
  circle.style.height = "80px";
  circle.style.backgroundColor = "#a8d5ba";

  startExercise();
});

endBtn.addEventListener('click', () => {
  stopExercise();
});

homeBtn.addEventListener('click', () => {
  completionScreen.classList.remove('active');
  startScreen.classList.add('active');
});

againBtn.addEventListener('click', () => {
  completionScreen.classList.remove('active');
  exerciseScreen.classList.add('active');
  startExercise();
});

function startExercise() {
  let stepIndex = 0;
  quoteDiv.innerText = quotes[Math.floor(Math.random() * quotes.length)];

  quoteInterval = setInterval(() => {
    quoteDiv.innerText = quotes[Math.floor(Math.random() * quotes.length)];
  }, 20000);

  function nextStep() {
    const step = steps[stepIndex];
    stepText.innerText = step.name;

    if (step.name.includes("Exhale")) {
      circle.style.width = "120px";
      circle.style.height = "120px";
      circle.style.backgroundColor = "#eaf8ed";
    } else {
      circle.style.width = "200px";
      circle.style.height = "200px";
      circle.style.backgroundColor = "#a8d5ba";
    }

    stepIndex = (stepIndex + 1) % steps.length;
    exerciseTimeout = setTimeout(nextStep, step.duration);
  }

  setTimeout(nextStep, 500); // Delay to show small circle first
}

function stopExercise() {
  clearInterval(quoteInterval);
  clearTimeout(exerciseTimeout);
  exerciseScreen.classList.remove('active');
  completionScreen.classList.add('active');
}










