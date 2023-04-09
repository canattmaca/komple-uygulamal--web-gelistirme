// let soru1 = {
//   soruMetni: 'Hangisi js paket yönetim uygulamasıdır',
//   cevapSecenekleri: {
//     a: 'Node.js',
//     b: 'Npm.js',
//     c: 'Typescriot.js',
//   },
//   dogruCevap: 'c',
//   cevabıKontrolEt: function (cevap) {
//     return cevap === this.dogruCevap
//   },
// }
// let soru2 = {
//   soruMetni: 'Hangisi .net paket yönetim uygulamasıdır',
//   cevapSecenekleri: {
//     a: 'Node.js',
//     b: 'Npm.js',
//     c: 'nudet',
//   },
//   dogruCevap: 'b',
//   cevabıKontrolEt: function (cevap) {
//     return cevap === this.dogruCevap
//   },
// }

//sınıf => nesne*30
//ES5(CONSTRUCTOR),ES6(SINIF),ES7

function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
  this.soruMetni = soruMetni
  this.cevapSecenekleri = cevapSecenekleri
  this.dogruCevap = dogruCevap
}
Soru.prototype.cevabıKonrolEt = function (cevap) {
  return cevap === this.dogruCevap
}
//artık hepsinde kullanmadım .200 kere fonksiyonu tekrarlamadım.Gerektiğinde kullanmak adına prototype ına eklemiş oldum.Performansı arttırdım

let soru1 = new Soru(
  'Hangisi js paket yönetim uygulamasıdır',
  {
    a: 'Node.js',
    b: 'Typescriot.js',
    c: 'npm.js',
  },
  'b'
)
let soru2 = new Soru(
  'Hangisi .net paket yönetim uygulamasıdır',
  {
    a: 'Node.js',
    b: 'Npm.js',
    c: 'nuget',
  },
  'c'
)

let sorular = [
  new Soru(
    '1-Hangisi .js paket yönetim uygulamasıdır',
    {
      a: 'Node.js',
      b: 'Npm.js',
      c: 'typscript',
    },
    'c'
  ),
  new Soru(
    '2-Hangisi .html paket yönetim uygulamasıdır',
    {
      a: '2022',
      b: 'Npm.js',
      c: 'nuget',
    },
    'a'
  ),
  new Soru(
    '3-Hangisi .net paket yönetim uygulamasıdır',
    {
      a: 'Node.js',
      b: 'nuget',
      c: 'npm',
    },
    'b'
  ),
  new Soru(
    '4-Hangisi .css paket yönetim uygulamasıdır',
    {
      a: 'Boostrap',
      b: 'Npm.js',
      c: 'nuget',
    },
    'a'
  ),
]

// //prototype : Obje cevabı kontrol et metodu var
// her nesne temelde bir objedir

function Quiz(sorular) {
  this.sorular = sorular
  this.soruIndex = 0
}
Quiz.prototype.soruGetir = function () {
  return this.sorular[this.soruIndex]
}
const quiz = new Quiz(sorular)

/*
const quiz = new Quiz(sorular)

console.log(quiz.soruGetir())
quiz.soruIndex += 1
console.log(quiz.soruGetir())
*/

document.querySelector('.btn-start').addEventListener('click', function () {
  if (quiz.sorular.length != quiz.soruIndex) {
    console.log(quiz.soruGetir())
    quiz.soruIndex += 1
  } else {
    console.log('soru bitti')
  }
})
