// let name = ["sadik", "turan", "kocaeli", "izmit"];
// let user = ["sadik", "turan", "kocaeli", "izmit", "41000"];
// // let firstname = name[0];
// // let lastName = name[1];
// // console.log(firstname, lastName);

// // let [firstname,lastName]=name
// // let [firstname,lastName,city,town]= "Sadik Turan".split(" ")
// let [firstname, lastName, ...address] = user;

// // console.log(firstname, lastName, address);

// // Object dectructuring
// let urun = {
//   marka: "apple",
//   model: "iphone13",
//   fiyat: 20000,
// };

// // let {marka,model,fiyat=0,satisDurumu=false} = urun
// // console.log(marka,model,fiyat,satisDurumu)

// // function urunGoster(marka, model, fiyat = 0, satisDurumu = false) {
// //   console.log(marka, model, fiyat, satisDurumu);
// // }

// function urunGoster(obj) {
//   let { marka, model, fiyat = 0, satisDurumu = false } = obj;
//   console.log(marka,model,fiyat,satisDurumu);
// }
// //fonksiyon kullanınca artık default olmadı!!
// urunGoster(urun);
class kisiES6 {
  constructor(ad, meslek, dogumyili) {
    this.ad = ad;
    this.meslek = meslek;
    this.dogumyili = dogumyili;
  }
  yasHesapla() {
    let tarih = new Date().getFullYear();
    return tarih - this.dogumyili;
  }

  get ad() {
    return this._ad;
  }

  get dogumyili() {
    return this._dogumYili;
  }
  set ad(value) {
    if (value.length < 3) {
      console.log("ad için yetersiz karekter");
      return;
    }
    this._ad = value;
  }
  set dogumyili(value) {
    if (value < 1900) {
      console.log("tarih bilgisi yanlıs ve bilgi yer almaz");
      return;
    }
    this._dogumYili = value;
  }
}

let kisi1 = new kisiES6("çınar", "ogrenci", 1001);
console.log(kisi1);
console.log(kisi1.ad);
