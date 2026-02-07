let quizzes, recitation, activities, attendance, midterm, finalExam;

document.getElementById("btn").onclick = function() {
    quizzes = document.getElementById("quizzes").value;
    recitation = document.getElementById("recitation").value;
    activities = document.getElementById("activities").value;
    attendance = document.getElementById("attendance").value;
    midterm = document.getElementById("midterm").value;
    finalExam = document.getElementById("finalExam").value;

    let finalGrade =
  (quizzes * 0.15) +
  (recitation * 0.10) +
  (activities * 0.25) +
  (attendance * 0.10) +
  (midterm * 0.20) +
  (finalExam * 0.20);

  document.getElementById("output").textContent = finalGrade;
}