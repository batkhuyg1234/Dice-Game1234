// Тоглогчийн ээлжийг хадгалах хувьсагч
var activePlayer = 1;

// Тоглогчдын цуглуулсан оноог хадгалдаг хувьсагч
var scores = [0, 0];
// тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundscore = 0;
// шоо буусан аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө
var diceNumber = Math.floor(Math.random() * 6 + 1);

document.getElementById("#score-0").textContent = "0"; // ID gaar function haij bga nuhtsuld getElementById eniig ashiglna
document.getElementById("#score-1").textContent = "0";
document.getElementById("#current-0").textContent = "0";
document.getElementById("#current-1").textContent = "0";
document.querySelector(".dice").style.display = "none";
