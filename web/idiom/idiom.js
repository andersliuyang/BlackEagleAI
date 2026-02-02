const START_SECONDS = 60;
const BONUS_SECONDS = 5;
const TIMER_INTERVAL = 100;
const SCORE_TIERS = [
  { minStreak: 8, multiplier: 4 },
  { minStreak: 5, multiplier: 3 },
  { minStreak: 3, multiplier: 2 },
  { minStreak: 1, multiplier: 1 },
];

const inputEl = document.getElementById("idiom-input");
const feedbackEl = document.getElementById("feedback");
const timeEl = document.getElementById("time-left");
const scoreEl = document.getElementById("score");
const messageEl = document.getElementById("input-message");
const acceptedListEl = document.getElementById("accepted-list");
const inputCardEl = document.querySelector(".input-card");

let idiomSet = new Set();
let idiomList = [];

let timerId = null;
let timeLeft = START_SECONDS;
let score = 0;
let accepted = [];
let acceptedSet = new Set();
let hasStarted = false;
let streak = 0;

function triggerScreenShake() {
  document.body.classList.remove("shake-screen");
  void document.body.offsetWidth;
  document.body.classList.add("shake-screen");
}

function setBackgroundDim(isDim) {
  document.body.classList.toggle("bg-dim", isDim);
}

function spawnScorePop(points, multiplier) {
  if (!inputCardEl) {
    return;
  }
  const pop = document.createElement("span");
  pop.className = "score-pop";
  pop.textContent = multiplier > 1 ? `+${points} x${multiplier}` : `+${points}`;
  inputCardEl.appendChild(pop);
  pop.addEventListener("animationend", () => {
    pop.remove();
  });
}

function getScoreMultiplier(currentStreak) {
  for (const tier of SCORE_TIERS) {
    if (currentStreak >= tier.minStreak) {
      return tier.multiplier;
    }
  }
  return 1;
}

function appendAccepted(value) {
  if (!acceptedListEl) {
    return;
  }
  const li = document.createElement("li");
  li.textContent = value;
  acceptedListEl.prepend(li);
}

function showMessage(text = "") {
  if (!messageEl) {
    return;
  }
  messageEl.textContent = text;
  messageEl.classList.toggle("show", Boolean(text));
}

function applyIdiomList(list) {
  idiomList = Array.isArray(list) ? list : [];
  idiomSet = new Set(idiomList.map((item) => String(item).trim()).filter(Boolean));
}

function updateStats() {
  timeEl.textContent = `${Math.max(0, Math.ceil(timeLeft))} 秒`;
  if (scoreEl) {
    scoreEl.textContent = score.toString();
  }
}

function normalizeInput(value) {
  return value.replace(/\s+/g, "").trim();
}

function isOverlapping(word) {
  for (const existing of accepted) {
    if (existing.includes(word) || word.includes(existing)) {
      return existing;
    }
  }
  return null;
}

function startTimer() {
  timerId = setInterval(() => {
    timeLeft -= TIMER_INTERVAL / 1000;
    if (timeLeft <= 0) {
      timeLeft = 0;
      updateStats();
      endGame();
      return;
    }
    updateStats();
  }, TIMER_INTERVAL);
}

function clearTimer() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
}

function startGame() {
  score = 0;
  accepted = [];
  acceptedSet = new Set();
  streak = 0;
  timeLeft = START_SECONDS;
  updateStats();
  inputEl.focus();
  clearTimer();
  startTimer();
  hasStarted = true;
  if (acceptedListEl) {
    acceptedListEl.innerHTML = "";
  }
}

function endGame() {
  clearTimer();
  hasStarted = false;
}

function submitInput() {
  if (!hasStarted) {
    startGame();
  }
  const raw = inputEl.value;
  const value = normalizeInput(raw);
  if (!value) {
    triggerScreenShake();
    setBackgroundDim(true);
    showMessage("请输入成语");
    streak = 0;
    return;
  }
  if (!idiomSet.has(value)) {
    triggerScreenShake();
    setBackgroundDim(true);
    showMessage("不存在这个成语");
    inputEl.select();
    streak = 0;
    return;
  }
  if (acceptedSet.has(value)) {
    triggerScreenShake();
    setBackgroundDim(true);
    showMessage("已经存在了");
    inputEl.select();
    streak = 0;
    return;
  }
  const overlap = isOverlapping(value);
  if (overlap) {
    triggerScreenShake();
    setBackgroundDim(true);
    showMessage("不存在这个成语");
    inputEl.select();
    streak = 0;
    return;
  }

  accepted.push(value);
  acceptedSet.add(value);
  streak += 1;
  const multiplier = getScoreMultiplier(streak);
  const points = 1 * multiplier;
  score += points;
  timeLeft += BONUS_SECONDS;
  showMessage("");
  setBackgroundDim(false);
  spawnScorePop(points, multiplier);
  appendAccepted(value);
  inputEl.value = "";
  updateStats();
}

inputEl.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    submitInput();
  }
});

function loadIdioms() {
  const list = window.IDIOM_WORDS;
  if (Array.isArray(list) && list.length) {
    applyIdiomList(list);
    return;
  }
  applyIdiomList([]);
}

loadIdioms();
updateStats();
