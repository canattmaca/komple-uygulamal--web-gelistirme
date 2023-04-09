let ad="Sadik"
let soyad="Turan"
let yas=10
let sehir="Kocaeli"
let emeklilik= (65-yas > 0) ?  "Emekliliğe " + (65-yas)+ " yılınız kaldı."  :"Zaten emekli oldunuz."
// let mesaj= "Benim adım " + ad + " ve soyadım " + soyad + ". " + sehir + "'de yaşıyorum.Emekliliğe " + (65-yas) + " yılım kaldı." ; 

// backthick ```````
let mesaj= `Benim adım  ${ad} ve soyadım ${soyad}.${sehir}'de yaşıyorum.${emeklilik}` ; 
console.log(mesaj);

// turnary operator