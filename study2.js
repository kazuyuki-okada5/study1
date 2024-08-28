'use strict';
// for文
// for (let i = 1; i <= 3; i++) {
//   console.log(i);
// }

// // 配列
// let arr = ['a', 'b', 'c'];
// // for (let i = 0; i < 3; i++) {
// //   console.log(arr[i]);
// // }

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// // ループの入れ子
// for (let i = 0; i < 3; i++){
//   for (let j = 0; j < 3; j++){
//     console.log(`i: ${i}, j: ${j}`);
//   }
// }

// 例題：2次元配列に格納されているテストの点数を全て取り出して表示する
// const scores = [
//   [100, 99, 98],
//   [90, 89, 88],
//   [80, 79, 78],
// ];

// // console.log(scores[0][0]);
// // console.log(scores[0][1]);
// // console.log(scores[0][2]);
// // console.log(scores[1][0]);
// // console.log(scores[1][1]);
// // console.log(scores[1][2]);
// // console.log(scores[2][0]);
// // console.log(scores[2][1]);
// // console.log(scores[2][2]);
// for (let i = 0; i < scores.length; i++){
//   for (let j = 0; j < scores[i].length; j++){
//     console.log(scores[i][j]);
//   }
// }

// while文
// let i = 1;
// while (i <= 3) {
//   console.log(i);
//   i++;
// }

// 例題:whileループの途中でwhile文を抜ける。（jが5になったら、while文を抜ける。）
// let j = 1;
// while (j <= 10) {
//   console.log(j);
//   if (j === 5) {
//     break;
//   }
//   j++;
// }

// do while文
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 3);

// // forEach文
// // 例:配列から一つずつ要素を取り出してコンソールに出力
// let colors = ['Red', 'Green', 'Blue'];
// // for (let i = 0; i < colors.length; i++) {
// //   console.log(colors[i]);
// // }

// colors.forEach(function (color) {
//   console.log(color);
// });

// for...of文
// const colors = ['Red', 'Green', 'Blue'];
// for (const color of colors) {
//   console.log(color);
// }

// // 文字列の場合
// const str = 'JavaScript';
// for (const value of str) {
//   console.log(value);
// }

// 58　演習
let scores = [100, 90, 80, 70, 60];
let sum = 0;
for (let i = 0; i < scores.length; i++) {
  console.log(scores[i]);
  sum += scores[i];
}
let average = sum / scores.length;

console.log('合計値:' + sum);
console.log('平均値:' + average);
