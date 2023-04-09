// kişi kişi 1 ,kişi 2
// ogrenci o1 o2
// kişi içerisinde olan özellikleri ogrenciye aktarabilirim. Ya da tam tersi  ya da lclass şeklinde fonksinoları kullanabilirim.

//parents
class kisi {
  constructor(ad, dogumYili) {
    this.ad = ad;
    this.dogumYili = dogumYili;
  }
  yasHesapla() {
    let tarih = new Date().getFullYear();
    return tarih - this.dogumYili;
  }

  kendiniTanit() {
    return `benim adim ${this.ad}`;
  }
}
//child

class ogrenci extends kisi {
  constructor(ad, dogumYili, okulNumarasi) {
    super(ad, dogumYili);
    this.okulNumarasi = okulNumarasi;
  }
  dersCalıs() {
    console.log(`${this.ad} ders çalışıyor.`);
  }
  kendiniTanit() {
    return `benim adim ${this.ad} . Okul numaran ${this.okulNumarasi}`;
  }
}

let öğrenci = new ogrenci("kadircan", 1997, 247);

console.log(öğrenci.yasHesapla());
console.log(öğrenci.dersCalıs());
console.log(öğrenci.kendiniTanit());
