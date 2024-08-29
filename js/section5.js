'use strict';
// イベントハンドラ
// const sayHelloButton = document.getElementById('sayHelloButton');
// sayHelloButton.addEventListener(
//   'click',
//   function (e) {
//     console.log('Hello!');
//     console.log(e);
//   },
//   false
// );

// sayHelloButton.addEventListener(
//   'click',
//   function () {
//     console.log('Hello!');
//   },
//   false
// );

// function sayHelloEventHandler(e) {
//   console.log('Hello!');
//   console.log(e);
// }
// sayHelloButton.addEventListener('click', sayHelloEventHandler, false);

// イベントハンドラの削除
// const sayHelloButton = document.getElementById('sayHelloButton');
// function sayHelloEventHandler(e) {
//   console.log('Hello!');
// }
// sayHelloButton.addEventListener('click', sayHelloEventHandler, false);

// const removeEventHandlerButton = document.getElementById('removeEventHandlerButton');
// function removeEventHandler(e) {
//   console.log('remove');
//   sayHelloButton.removeEventListener('click', sayHelloEventHandler, false);
// }
// removeEventHandlerButton.addEventListener('click', removeEventHandler, false);

// changeイベントを利用したイベントハンドラ
// イベントハンドラ
// function handleChange() {
//   // 「すべてにチェックボックス」の要素を取得
// const checkAll = document.getElementById('checkAll');
//   // name属性がlanguageのチェックボックス要素を取得
// const checkBoxes = document.getElementsByName('language');
//   // name属性がlanguageのチェックボックス要素をループ処理
//   for (let i = 0; i < checkBoxes.length; i++){
//   // 各チェックボックスのチェック状態を「すべてにチェックボックス」の状態に合わせる
//     checkBoxes[i].checked = checkAll.checked;
//   }
// }
// // checkAllチェックボックスのchangeイベントのイベントハンドラを登録
// const ca = document.getElementById('checkAll')
// ca.addEventListener('change', handleChange, false);

// DOMContentLoadedイベントとonloadイベント
// 例題
// 「Now Loading...」表示 + 画像表示をする
// DOMContentLoadedイベントが発生したら、alertダイアログを表示する。
// loadイベントが発生したら、「Now Loading...」を非表示にする

// DOMContentLoaded
// document.addEventListener(
//   'DOMContentLoaded',
//   function () {
//     alert('DOMContentLoaded!');
//   },
//   false
// );

// // Load
// window.onload = function () {
//   const nowLoading = document.getElementById('nowLoading');
//   nowLoading.style.display = 'none';
// };

// 演習問題〜数取器〜
let num = 0;

function updateCounter(num) {
  const counter = document.getElementById('counter');
  counter.textContent = num;
}
function countUp() {
  num++;
  // const counter = document.getElementById('counter');
  // counter.textContent = num;
  updateCounter(num);
}

function reset() {
  num = 0;
  // const counter = document.getElementById('counter');
  // counter.textContent = num;
  updateCounter(num);
}

const countUpBtn = document.getElementById('countUpButton');
countUpBtn.addEventListener('click', countUp, false);
const resetBtn = document.getElementById('resetButton');
resetBtn.addEventListener('click', reset, false);
