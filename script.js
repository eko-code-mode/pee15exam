const answers = {
  q1: "b",
  q2: "c",
  q3: "a",
};

const quizForm = document.getElementById("quizForm");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  let score = 0;
  let answered = 0;
  const total = Object.keys(answers).length;

  Object.entries(answers).forEach(([name, correct]) => {
    const selected = quizForm.querySelector(`input[name="${name}"]:checked`);
    if (selected) {
      answered += 1;
      if (selected.value === correct) {
        score += 1;
      }
    }
  });

  if (answered < total) {
    result.classList.remove("ok");
    result.textContent = `You answered ${answered}/${total}. Complete all items first.`;
    return;
  }

  const percent = Math.round((score / total) * 100);
  result.classList.add("ok");
  result.textContent = `Score: ${score}/${total} (${percent}%).`;
});

quizForm.addEventListener("reset", () => {
  result.classList.remove("ok");
  result.textContent = "";
});
