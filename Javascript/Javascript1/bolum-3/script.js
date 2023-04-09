// // nesne tabanlı progralama Object
// let soru = {
//   soruMetni: "Hangisi Jv paket yönetimi uygulamasidir?",
//   cevapSecenekler: {
//     a: "Node.Js",
//     b: "Java",
//     c: "Css",
//   },
//   dogruCevap: "b",
//   cevabiKontrolet: function (cevap) {
//     return cevap == this.dogruCevap;
//   },
// };
// let soru2 = {
//   soruMetni: "Hangisi css paket yönetimi uygulamasidir?",
//   cevapSecenekler: {
//     a: "Node.Js",
//     b: "html",
//     c: "Css",
//   },
//   dogruCevap: "c",
//   cevabiKontrolet: function (cevap) {
//     return cevap == this.dogruCevap;
//   },
// };
// let soru3 = {
//   soruMetni: "Hangisi tysc paket yönetimi uygulamasidir?",
//   cevapSecenekler: {
//     a: "Node.Js",
//     b: ".Net",
//     c: "Css",
//   },
//   dogruCevap: "a",
//   cevabiKontrolet: function (cevap) {
//     return cevap == this.dogruCevap;
//   },
// };
// console.log(soru.soruMetni);
// console.log(soru.cevabiKontrolet("c"));
// console.log(soru2.cevabiKontrolet("c"));
//sınıf , constructor
//ES5,ES6
//object

// // construcktor tanımlarken büyük kullanırım. Buna dikkat ediyorum.

// function question(soruMetni, cevapSecenekleri, dogruCevap) {
//   this.soruMetni = soruMetni;
//   this.cevapSecenekleri = cevapSecenekleri;
//   this.dogruCevap = dogruCevap;
//   console.log(this);
// }
// // question.prototype.cevabiKontrolEt=function(cevap){
// //         return cevap === this.dogruCevap
// //    },
// question.prototype.cevabiKontrolEt = function (cevap) {
//   return cevap === this.dogruCevap;
// };

// // let soru1 = new question(
// //   "Hangisi Jv paket yönetimi uygulamasidir?",
// //   {
// //     a: "Node.Js",
// //     b: ".Net",
// //     c: "Css",
// //   },
// //   "a"
// // );
// // let soru2 = new question(
// //   "Hangisi .Net paket yönetimi uygulamasidir?",
// //   {
// //     a: "Nulget",
// //     b: ".Net",
// //     c: "npm",
// //   },
// //   "a"
// // );

// let Sorular = [
//   new question(
//     "Hangisi css paket yönetimi uygulamasidir?",
//     { a: "Node.Js", b: ".Net", c: "Css" },
//     "a"
//   ),
//   new question(
//     "Hangisi html paket yönetimi uygulamasidir?",
//     { a: "Node.Js", b: ".Net", c: "Css" },
//     "a"
//   ),
//   new question(
//     "Hangisi Jv paket yönetimi uygulamasidir?",
//     { a: "Node.Js", b: ".Net", c: "Css" },
//     "a"
//   ),
//   new question(
//     "Hangisi nodejs paket yönetimi uygulamasidir?",
//     { a: "Node.Js", b: ".Net", c: "Css" },
//     "a"
//   ),
// ];
// for (let q of sorular) {
//   console.log(q.soruMetni);
//   console.log(q.cevabiKontrolEt("c"))
// }

// console.log(Sorular[0].cevabiKontrolEt("c"));

function question(soruMetni, cevapSecenekleri, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.dogruCevap = dogruCevap;
}

question.prototype.cevabiKontrolEt = function (cevap) {
  return cevap === this.dogruCevap;
};

let sorular = [
  new question(
    "1=Hangisi css paket yönetimi uygulamasidir?",
    { a: "Node.Js", b: ".Net", c: "Css" },
    "a"
  ),
  new question(
    "2=Hangisi html paket yönetimi uygulamasidir?",
    { a: "Node.Js", b: ".Net", c: "Css" },
    "a"
  ),
  new question(
    "3=Hangisi Jv paket yönetimi uygulamasidir?",
    { a: "Node.Js", b: ".Net", c: "Css" },
    "a"
  ),
  new question(
    "4=Hangisi nodejs paket yönetimi uygulamasidir?",
    { a: "Node.Js", b: ".Net", c: "Css" },
    "a"
  ),
];

function Quiz(sorular) {
  this.sorular = sorular;
  this.soruIndex = 0;
}

Quiz.prototype.soruGetir = function () {
  return this.sorular[this.soruIndex];
};

const quiz = new Quiz(sorular);

document.querySelector(".btn_start").addEventListener("click", function () {
  document.querySelector(".quiz_box").classList.add("active");
  soruGoster(quiz.soruGetir());
  sorusayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
  document.querySelector(".next_btn").classList.remove("show");
});

document.querySelector(".next_btn").addEventListener("click", function () {
  if (quiz.sorular.length != quiz.soruIndex + 1) {
    document.querySelector(".quiz_box").classList.add("active");
    quiz.soruIndex += 1;
    soruGoster(quiz.soruGetir());
    sorusayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
    document.querySelector(".next_btn").classList.remove("show");
  } else {
    console.log("quiz bitti.");
  }
});

const option_list = document.querySelector(".option_list");
const correctIcon = '<div class="icon"><i class="fa fa-check"></i></div>';
const incorrectIcon = '<div class="icon"><i class="fa fa-times"></i></div>';

function soruGoster(soru) {
  let question = `<span>${soru.soruMetni}</span>`;
  let options = ``;
  for (let cevap in soru.cevapSecenekleri) {
    options += `
            <div class="option">
            <span><b>${cevap}</b>:${soru.cevapSecenekleri[cevap]}  </span>
            </div>
            
            `;
  }

  document.querySelector(".question_text").innerHTML = question;
  option_list.innerHTML = options;

  const option = option_list.querySelectorAll(".option");

  for (opt of option) {
    opt.setAttribute("onclick", "optionSelected(this)");
  }
}

function optionSelected(option) {
  let cevap = option.querySelector("span b").textContent;
  console.log(cevap);
  let soru = quiz.soruGetir();
  if (soru.cevabiKontrolEt(cevap)) {
    option.classList.add("correct");
    option.insertAdjacentHTML("beforeend", correctIcon);
  } else {
    option.classList.add("incorrect");
    option.insertAdjacentHTML("beforeend", incorrectIcon);
  }
  for (let i = 0; i < option_list.children.length; i++) {
    option_list.children[i].classList.add("disabled");
  }

  document.querySelector(".next_btn").classList.add("show");
}
function sorusayisiniGoster(soruSirasi, toplamSoru) {
  let tag = `<span class="badge bg-warning">${soruSirasi}  / ${toplamSoru}</span>`;
  document.querySelector(".quiz_box .question_index").innerHTML = tag;
}
