// Тоглогчийн ээлжийг хадгалах хувьсагч
var activePlayer = 1;

// Тоглогчдын цуглуулсан оноог хадгалдаг хувьсагч
var scores = [0, 0];
// тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundscore = 0;
// шоо буусан аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө
var dice = Math.floor(Math.random() * 6 + 1);

// document.querySelector("#score-0").textContent = dice;
// document.querySelector("#score-1").textContent = dice;
document.querySelector("#score -0").textContent = 0;
document.querySelector("#score -1").textContent = 0;
document.querySelector("#current -1").textContent = 0;
document.querySelector("#current -0").textContent = 0;
document.querySelector(".dice").style.display = "none";
