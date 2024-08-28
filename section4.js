'use strict';

// let btn = document.getElementById('triggerButton');
// btn.addEventListener('click', function (e) {
//   // alert('clicked!');
//   // IDによるノード取得
//   let headerTitle = document.getElementById('headerTitle');
//   // let headerTitle = document.getElementById('hoge');
//   console.log(headerTitle);
//   // コンテンツの取得（テキストの取得）
//   console.log(headerTitle.textContent);
// }, false);

// テキストの置き換え
// let btn = document.getElementById('triggerButton');
// btn.addEventListener(
//   'click',
//   function (e) {
//     // IDによる取得
//     let headerTitle = document.getElementById('headerTitle');
//     // テキストの置換
//     headerTitle.textContent = 'タイトルが変更されました';
//   },
//   false
// );

// 属性値を取得
// let btn = document.getElementById('triggerButton');
// btn.addEventListener(
//   'click',
//   function (e) {
//     // IDにノードの取得
//     let inputColorName = document.getElementById('inputColorName');
//     // 取得したinput要素の入力値を取得
//     let colorNameText = inputColorName.value;
//     // 取得したinput要素のname属性値を取得
//     let inputName = inputColorName.getAttribute('name');
//     // idがshowTextのp要素を取得
//     let showText = document.getElementById('showText');
//     // 出力
//     showText.textContent = `name属性: ${inputName}, 入力されたテキスト: ${colorNameText}`;
//   },
//   false
// );

// 属性の追加、更新、削除
// 属性の追加、更新（赤）
// let setRedClassButton = document.getElementById('setRedClassButton');
// setRedClassButton.addEventListener(
//   'click',
//   function (e) {
//     let showText = document.getElementById('showText');
//     showText.setAttribute('class', 'red');
//   },
//   false
// );

// // 属性の追加、更新（青）
// let setBlueClassButton = document.getElementById('setBlueClassButton');
// setBlueClassButton.addEventListener(
//   'click',
//   function (e) {
//     let showText = document.getElementById('showText');
//     showText.setAttribute('class', 'blue');
//   },
//   false
// );

// // 属性の削除
// let removeClassButton = document.getElementById('removeClassButton');
// removeClassButton.addEventListener(
//   'click',
//   function (e) {
//     let showText = document.getElementById('showText');
//     showText.removeAttribute('class');
//   },
//   false
// );

// タグ名で要素を取得
// let btn = document.getElementById('triggerButton');
// btn.addEventListener(
//   'click',
//   function (e) {
//     let elements = document.getElementsByTagName('p');
//     console.log(elements);
//     for (let i = 0; i < elements.length; i++) {
//       console.log(elements[i].textContent);
//     }
//   },
//   false
// );

// name属性で要素を取得する
// let btn = document.getElementById('triggerButton');
// btn.addEventListener(
//   'click',
//   function (e) {
//     let elements = document.getElementsByName('inputText');
//     console.log(elements);
//     console.log(elements[0].value);
//   },
//   false
// );

// クラス名で要素を取得
// let btn = document.getElementById('triggerButton');
// btn.addEventListener('click',  function (e) {
//   let elements = document.getElementsByClassName('foo');
//   console.log(elements);
//   for (let i = 0; i < elements.length; i++) {
//     console.log(elements[i].textContent);
//   }
//   },
//   false
// );

// セレクタで要素を取得
// let btn = document.getElementById('triggerButton');
// btn.addEventListener(
//   'click',
//   function (e) {
//     // let element = document.querySelector('.foo');
//     // console.log(element);
//     // console.log(element.textContent);

//     let elements = document.querySelectorAll('.foo');
//     console.log(elements);
//     for (let i = 0; i < elements.length; i++) {
//       console.log(elements[i].textContent);
//     }
//   },
//   false
// );

// 要素の追加と削除
// let addButton = document.getElementById('addButton');
// addButton.addEventListener(
//   'click',
//   function (e) {
//     // 入力欄のinput要素を取得
//     let inputLanguage = document.getElementById('inputLanguage');
//     // input要素から文字列を取得
//     let language = inputLanguage.value;
//     if (language === '') {
//       alert('未入力です');
//       return;
//     }
//     // li要素を生成
//     let listItem = document.createElement('li');
//     // li要素のコンテンツに入力された文字列を設定
//     listItem.textContent = language;
//     // ul要素を取得
//     let languageList = document.getElementById('languageList');
//     // リストの末尾に生成したli要素を追加
//     languageList.appendChild(listItem);
//     // 入力欄をクリア
//     inputLanguage.value = '';
//   },
//   false
// );

// // 削除
// let removeButton = document.getElementById('removeButton');
// removeButton.addEventListener(
//   'click',
//   function (e) {
//     // ul要素を取得
//     let languageList = document.getElementById('languageList');
//     // リストの末尾から要素を削除
//     languageList.removeChild(languageList.lastElementChild);
//   },
//   false
// );

// Windowオブジェクト
// window.console.log('Hello')
// コンソール出力
// console.log('Hello');

// 警告表示
// window.alert('Are you OK?');

// 確認ダイアログ
// window.confirm('Are you OK?');

// 別のWindowを開く
// window.open('https://www.google.co.jp');

// Windowを閉じる
// window.close();

// スクロール
let btn = document.getElementById('triggerButton');
btn.addEventListener('click', function (e) {
  window.scroll(0, 300);
}, false);