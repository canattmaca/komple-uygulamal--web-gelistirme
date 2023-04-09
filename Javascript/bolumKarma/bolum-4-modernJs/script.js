/*
function selamlama() {
  console.log('Hello')
}
selamlama()

const selam = (name) => {
  return console.log('Hello ' + name)
}

selam('Mehmet')

var toplamES = function (a, b) {
  return a + b
}

var toplamE6 = (a, b) => a + b

var sonuc = toplamES(10, 20)
var sonuc2 = toplamE6(10, 20)
console.log(sonuc2)

const sayilar = [1, 5, 7, 2, 3, 67]
const tekSayilar1 = []

for (let sayi of sayilar) {
  if (sayi % 2 == 1) {
    tekSayilar1.push(sayi)
  }
}

// const tekSayiKontrol = (sayi) => sayi % 2 == 1

// const tekSayilar = sayilar.filter(tekSayiKontrol)

const tekSayilar = sayilar.map((sayi) => sayi % 2 == 1)

console.log(tekSayilar)

const urunler = [
  { urunAdi: 'iphone 11', fiyat: 12000 },
  { urunAdi: 'iphone 12', fiyat: 14000 },
  { urunAdi: 'iphone 13', fiyat: 16000 },
  { urunAdi: 'iphone 14', fiyat: 20000 },
]

// const sonuc = urunler.map((urun) => urun.urunAdi)
const sonuc = urunler
  .filter((urun) => urun.fiyat >= 15000)
  .map((urun) => urun.urunAdi)
console.log(sonuc)


const msj = ['Benim', 'adim', 'Kadircan', 'Atmaca']
let sonuc = ''
for (let x of msj) {
  sonuc += x + ' '
}

console.log(sonuc)
console.log(...msj)

const dizi1 = ['bir', 'iki']
const dizi2 = ['uc', 'dort']

const dizi4 = [dizi1, dizi2]
const dizi3 = [...dizi1, ...dizi2]
console.log(dizi3)

//dizi kopyalama işlemlerinde işimize yarıyor

const sayilar1 = [1, 2, 3]
// const sayilar2 = sayilar1 //referans yaptım
const sayilar2 = [...sayilar1] //referans yaptım
sayilar2[0] = 10
console.log(sayilar1, sayilar2) //value copy

const user = {
  username: 'canatmaca',
  email: 'canattmaca@gmail.com',
}

const adress = {
  username: 'kadircan Atmac',
  city: 'Kocaeli',
}

console.log({ ...user, ...adress })

//rest parameters

function toplam(...args) {
  let sonuc = 0
  for (let sayi of args) {
    sonuc += sayi
  }
  return sonuc
}

console.log(toplam(1, 5, 15, 25))


function bilgileriniGoster(isim, soyad, ...adres) {
  console.log(isim, soyad, adres)
}

bilgileriniGoster('ali', 'turan', 'Başakşehir', 'Konya')


// array destructuring

let user = ['Can', 'Atmaca', 'Kocaeli', 'İzmit', '41000']

// let firstName = name[0]
// let lastName = name[1]

// let [firstName, lastName] = name
// let [firstName, lastName] = 'Sadik Turan'.split(' ')
// let [firstName, lastName, city, town] = user
let [firstName, lastName, ...adress] = user
// console.log(firstName, lastName, city, town)
// console.log(firstName, lastName, town)
console.log(firstName, lastName, adress)
//öteleyerek veri çekmiş oldum

let urun = {
  marka: 'Apple',
  model: 'Iphone12',
  fiyat: 20000,
  // satisDurumu: true,
}

let { marka, model, fiyat = 15000, satisDurumu = false } = urun
// console.log(marka, model, fiyat, satisDurumu)

function urunGoster(obj) {
  let { marka, model, fiyat = 15000, satisDurumu = false } = obj
  console.log(marka, model, fiyat, satisDurumu)
}

urunGoster(urun)

// Map Objesi kullanımı,keyvalue veriyi saklayabiliriz.Sıralanmıs şekilde karşımıza gelir.Size property si var.

const ogrenciler = new Map()
ogrenciler.set(1, 'ali yılmaz')
ogrenciler.set('566666541231', 'mehmet yılmaz')
ogrenciler.set(true, 'ali can')
console.log(ogrenciler)

// set ekler bu objeye
// get getirir geri döndürür

// console.log(ogrenciler.get(true))

let sonuc
// sonuc = ogrenciler.size
// sonuc = ogrenciler.has(2)
// sonuc = ogrenciler.has(1)
// sonuc = ogrenciler.delete(1)
// sonuc = ogrenciler.clear()

// for (let x of ogrenciler.entries()) {
//   console.log(x)
// }

// for (let x of ogrenciler.keys()) {
//   console.log(x)
// }
// for (let x of ogrenciler.values()) {
//   console.log(x)
// }

// ogrenciler.forEach(function (value, key) {
//   console.log(value, key)
// })


//Javascripts Sets

// const sayilar = new Set([1, 2, 3])
const sayilar = new Set()
sayilar.add(1)
sayilar.add(2)
sayilar.add(3)
sayilar.add('4')
sayilar.add(3)
// gorüldüğü üzere 3ü iki defa yazmama rağmen saymadı
sayilar.delete(1)
console.log(sayilar)
// console.log(sayilar.has(2))
// console.log(sayilar.values())
const dizi = [...sayilar]
console.log(dizi)

for (let x of sayilar.values()) {
  console.log(x)
}
sayilar.forEach((value) => {
  console.log(value)
})




// class kullanımı
function KisiES5(ad, meslek, dogumYili) {
  this.ad = ad
  this.meslek = meslek
  this.dogumYili = dogumYili
}
KisiES5.prototype.yasHesapla = function () {
  let tarih = new Date().getFullYear()
  return tarih - this.dogumYili
}

let emre = new KisiES5('Emre', 'Plumber', 1990)
let ahmet = new KisiES5('Ahmet', 'Teacher', 1985)

// console.log(emre.yasHesapla())
// console.log(ahmet.yasHesapla())

class KisiES6 {
  constructor(ad, meslek, dogumYili) {
    this.ad = ad
    this.meslek = meslek
    this.dogumYili = dogumYili
  }
  yasHesapla() {
    let tarih = new Date().getFullYear()
    return tarih - this.dogumYili
  }
}

let kisi1 = new KisiES6('Emre', 'Plumber', 1990)
let kisi2 = new KisiES6('Ahmet', 'Teacher', 1995)

console.log(kisi1.yasHesapla(), kisi2.yasHesapla())
// 

// Getter ve Setter

class KisiES6 {
  constructor(ad, meslek, dogumYili) {
    this.ad = ad
    this.meslek = meslek
    this.dogumYili = dogumYili
  }
  yasHesapla() {
    let tarih = new Date().getFullYear()
    return tarih - this.dogumYili
  }
  get ad() {
    return this._ad
  }
  set ad(value) {
    if (value.length < 3) {
      console.log('Ad için çok az karekter')
      return
    }
    this._ad = value
  }
  get dogumYili() {
    return this._dogumYili
  }
  set dogumYili(value) {
    if (value < 1900 || value > new Date().getFullYear()) {
      console.log('Tarih bilgisi yanlış')
      return
    }
    this._dogumYili = value
  }
}

let kisi1 = new KisiES6('Emre', 'Plumber', 2000)

console.log(kisi1.yasHesapla())

console.log(kisi1.ad)


// inheritance super()
//parent
class Kisi {
  constructor(ad, dogumYili) {
    console.log('kisi constructor')

    this.ad = ad
    this.dogumYili = dogumYili
  }
  yasHesapla() {
    let tarih = new Date().getFullYear()
    return tarih - this.dogumYili
  }

  kendiniTanıt() {
    return `benim adim ${this.ad}`
  }
}
//child
class Students extends Kisi {
  constructor(ad, dogumYili, okulNumarası) {
    console.log('ogrenci constructor')
    super(ad, dogumYili)
    this.okulNumarası = okulNumarası
  }
  dersCalis() {
    return `${this.ad} ders çalışıyor.`
  }
  kendiniTanıt() {
    return `benim adim ${this.ad} ve okul numaran ${this.okulNumarası}`
  }
}

let kisi = new Kisi('Mehmet', 1990)
let ogrenci = new Students('Ali', 2000, 247)

// console.log(kisi.yasHesapla())
console.log(ogrenci.kendiniTanıt())
*/
