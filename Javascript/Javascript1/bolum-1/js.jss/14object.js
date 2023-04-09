// let user1 = ["sadik", "turan", 38];
// let user2 = ["sadik", "bilgi", 39];
// // //dict json
let kullaniciA = {
  ad: "Sadik",
  soyad: "Turan",
  yas: 38,
  adres: { sehir: "Kocaeli", ilce: "Yildirim" },
  hobiler: ["sinema", "tiyatro"],
};
let kullaniciB = {
  ad: "Yeliz",
  soyad: "Abasıyanık",
  yas: 38,
  adres: { sehir: "Kocaeli", ilce: "Yildirim" },
  hobiler: ["sinema", "tiyatro"],
};

let kullanicilar = [kullaniciA, kullaniciB];

let sonuc;

sonuc = kullanicilar[1].adres.sehir
console.log(sonuc);
