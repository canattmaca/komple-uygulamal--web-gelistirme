// let fruits = ["apple", "pear", "banana", "strawberry"];
// sonuc = fruits.length;
// sonuc = fruits.includes("apple"); //nesneyi içerip içermediğini öğrenir
// //liste sonuna kiraz ekle
// // sonuc=fruits.push("kiraz");
// sonuc=fruits.splice(2,3) splice(meyveler.length-2,2) *2 pop() diyebiliriz


let Ad1 = "Yigit";
let Ad2 = "Ada";
let Ad3 = "Ahmet";

let Soyad1 = "Bilgi";
let Soyad2 = "Bilgi";
let Soyad3 = "Turan";

let dogumyili1 = 2010;
let dogumyili2 = 2012;
let dogumyili3 = 2009;

let not1 = [70, 60, 80];
let not2 = [80, 80, 90];
let not3 = [60, 60, 70];

let ogrenci1 = [Ad1, Soyad1, dogumyili1, not1];
let ogrenci2 = [Ad2, Soyad2, dogumyili2, not2];
let ogrenci3 = [Ad3, Soyad3, dogumyili3, not3];

// a=Yasortalaması?

let now = new Date();
 
let ogrenciyas1 = now.getFullYear() - ogrenci1[2];
let ogrenciyas2 = now.getFullYear() - ogrenci2[2];
let ogrenciyas3 = now.getFullYear() - ogrenci3[2];

let ogrencinotort1=(ogrenci1[3][0]+ogrenci1[3][1]+ogrenci1[3][2])/3
let ogrencinotort2=(ogrenci2[3][0]+ogrenci2[3][1]+ogrenci2[3][2])/3
let ogrencinotort3=(ogrenci3[3][0]+ogrenci3[3][1]+ogrenci3[3][2])/3


console.log(ogrencinotort1);
console.log(ogrencinotort2);
console.log(ogrencinotort3);

