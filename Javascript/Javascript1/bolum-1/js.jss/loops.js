// let toplam=0;

// for (let i = 0; i < 10; i++) {
//   toplam +=i
// }
// console.log(toplam);
let toplam = 0;

let numbers = [1, 2, 3, 5, 6, 7, 1, 8, -77, 9];

// for (let dizielemani = 0; dizielemani < numbers.length; dizielemani++) {
//   toplam += numbers[dizielemani];
// }

// for (let index in numbers) {
//   console.log(index);
// }

//index sayısını verir elemanları vermez ayk ol

// for (let i in numbers) {
//   toplam += numbers[i];
// }
// console.log(toplam);

for(let sayi of numbers){
    toplam+=sayi
}
console.log(toplam);

