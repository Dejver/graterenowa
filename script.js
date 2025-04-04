const allQuestions = [
  { q: "Rozwiń skrót AKSiM", a: ["Akademia Kultury Społecznej i Medialnej", "akademia kultury społecznej i medialnej"] },
  { q: "Ile jest bieżni na siłowni?", a: ["3", "trzy"] },
  { q: "Ile kierunków jest na uczelni?", a: ["7", "siedem"] },
  { q: "Czym jest REPA?", a: ["Recepcja", "recepcja"] },
  { q: "Jak nazywa się sala, w której odbywają się wykłady inauguracyjne?", a: ["Aula", "aula"] },
  { q: "Jak ma na imię Pani bibliotekarka?", a: ["Barbara", "Basia"] },
  { q: "Ile kaplic jest na uczelni?", a: ["2", "dwie", "dwa"] },
  { q: "Jakie kolory są na logo uczelni?", a: ["czerwony i biały", "biały i czerwony"] },
  { q: "Jak nazywa się studencka rozgłośnia radiowa?", a: ["Radio SIM", "sim", "SIM"] },
  { q: "Czy podobała ci się gra?", a: ["Tak", "tak"] }
];

let hasSubmitted = false;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("startBtn").addEventListener("click", () => {
    document.getElementById("startBtn").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    document.getElementById("controls").style.display = "block";

    const quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = "";

    allQuestions.forEach((item, index) => {
      const div = document.createElement("div");
      div.className = "question";
      div.innerHTML = `
        <h3>🔸 Zagadka ${index + 1}</h3>
        <p>${item.q}</p>
        <input type="text" id="answer${index}" placeholder="Twoja odpowiedź..." />
      `;
      quizDiv.appendChild(div);
    });
  });
});

function checkAnswers() {
  if (hasSubmitted) return;

  let correct = 0;
  allQuestions.forEach((item, index) => {
    const userAnswer = document.getElementById(`answer${index}`).value.trim().toLowerCase();
    const isCorrect = item.a.some(ans => ans.toLowerCase() === userAnswer);
    if (isCorrect) correct++;
  });

  const result = document.getElementById("result");
  if (correct === allQuestions.length) {
    result.innerText = `🎉 Gratulacje! Udało Ci się odpowiedzieć poprawnie na wszystkie ${allQuestions.length} zagadki!`;
  } else {
    result.innerText = `Masz ${correct} / ${allQuestions.length} poprawnych odpowiedzi. Dzięki za udział!`;
  }

  document.getElementById("submitBtn").disabled = true;
  hasSubmitted = true;
}
