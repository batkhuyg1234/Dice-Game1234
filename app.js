// Тоглоомны бүх газар ашиглагдах глобаль хувьсагчдыг энд зарлая
var activePlayer;
var scores;
var roundScore;

// Шооны зургийг үзүүлэх элементийг DOM -оос хайж олоод энд хадгалья
var diceDom = document.querySelector(".dice");
// тоглоомыг эхлүүлнэ
initGame();

function initGame() {
  // тоглогчийн ээлжийг хадгалах хувьсагч хадгалах
  activePlayer = 0;
  //тоглогчийн цуглуулсан оноог хадгалах
  scores = [0, 0];
  // тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
  roundScore = 0;
  // // шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй , 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
  // var diceNumber = Math.floor(Math.random() * 6) + 1;

  // програм эхлэхэд оноо 0 байх
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  // ялагч гэсэн нэрний оронд тоглогч гэж харуулна шинээр тоглоом эхлүүлхэд
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  // winner гэсэн бичгийг арилгана
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  // active ийг алга болгоно
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  // new game ehlehed 1 р тоглогч дээр active bna
  document.querySelector(".player-0-panel").classList.add("active");

  diceDom.style.display = "none";
}

// шоод шидэх эвэнт листенер
document.querySelector(".btn-roll").addEventListener("click", function() {
  // 1-6 хүртэл санамсаргүй нэг тоо гаргаж авна.
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  // Шооны зургийг вэб дээр гаргаж ирнэ
  diceDom.style.display = "Block";
  // буусан санамсаргүй тоонд харгалзах зургийг вэбд гаргаж үзүүлнэ.
  diceDom.src = "dice-" + diceNumber + ".png";
  // буусан тоо нь 1-ээс ялгаатай бол идэвхтэй тоглогчийн ээлжийг оноог нэмэгдүүлнэ
  if (diceNumber !== 1) {
    // 1-с ялгаатай тоо буулаа. буусан тоог тоглогчид нэмж өгнө
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // 1 буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө
    switchToNextPlayer();
  }
});
// hold tovchnii event listner
document.querySelector(".btn-hold").addEventListener("click", function() {
  // уг тоглогчийн цуглуулсан ээлжийн оноог глобаль оноо дээр нь нэмж өгнө.
  scores[activePlayer] = scores[activePlayer] + roundScore;

  // дэлгэц дээр оноог өөрчилнө
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  // Уг тоглогч хожсон эсэхийг (оноо нь 100-с их эсэх) шалгах
  if (scores[activePlayer] >= 10) {
    // ялагч гэсэн текстийг нэрний оронд гарганаа.
    document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    // тоглогчийн ээлжийг солино
    switchToNextPlayer();
  }
});
// Энэ функц нь тоглох ээлжийг дараачийн тоглогч руу шилжүүлдэг.
function switchToNextPlayer() {
  // Ээлжиндээ цуглуусан оноог 0 болгоно.
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  // тоглогчийн ээлжийг нөгөө тоглогч руу шилжүүлнэ
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  // улаан цэгийг шилжүүл
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  // Шоог түр алга болгоно.
  diceDom.style.display = "none";
}
// шинээр тоглоом эхлүүэх товчны эвэнт листнер
document.querySelector(".btn-new").addEventListener("click", initGame);
