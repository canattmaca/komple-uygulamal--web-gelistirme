// 10-50 arasında mı sayı öğreniyoruz

        // let sayi = 11;
        // if (sayi >= 10 && sayi <= 50) {
        // console.log("Sayı 10-50 arasındadır");
        // } else {
        // console.log("Sayı arasında değil");
        // }

// bir sayı pozitif mi negatif mi?
        // let sayi1=11;
        // if (sayi1%2==0){
        //     console.log("Sayı çift sayıdır.");
        // }
        // else{ console.log("Sayı tek sayıdır.");}

// x,y,z büyüklük karşılaştırması yapınız. else if
        // let x = 18;
        // let y = 18;
        // let z = 38;

        // if (x > y && x > z) {
        // if (y > z) {
        //     console.log("z<y<x");
        // } else if (y < z) {
        //     console.log("y<z<x");
        // } else {
        //     console.log("y=z<x");
        // }
        // }
        // else if (y > x && y > z) {
        // if (x > z) {
        //     console.log("z<x<y");
        // } else if (z > x) {
        //     console.log("x<z<y");
        // } else {
        //     console.log("x=y<z");
        // }
        // }
        // else {
        // if (y > x) {
        //     console.log("x<y<z");
        // } else if (x > y) {
        //     console.log("y<x<z");
        // } else {
        //     console.log("x=y<z");
        // }
        // }

// 2 vize %40 ve 1 final %60 notuna göre hesaplanan ortalama değer için
// a-eğer ort 50 ve üstü ise geçer yoksa kalır
// b-geçmek için ort 50 olsa bile final 50 üstü olmalı
// c-finalden 70 alırsa ortalama 50 altı olsa bile geçer.

let vize1=90;
let vize2=80;
let final=51;
let ort=(vize1*40/100)+(vize2*40/100)+(final*60/100);

if (final>=70){
    console.log("Geçti")
} 

else if(final<=50){
    console.log("kaldı")
}

else {
    if(ort>=50){
        console.log("Geçti")
    }
    else{
        console.log("Kaldı")
    } 
}
