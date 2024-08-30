'use strict';
// 文字数カウンタ
// イベントハンドラ
// function keyUp(e) {
//   // console.log('keyUp');
//   // console.log(inputText.value);
//   // console.log(inputText.value.length);
//   // 入力された値を取得
//   let str = inputText.value;
//   str = str.replace(/\r?\n/g, '');
//   // 残りの文字数
//   let num = 10 - str.length;
//   console.log(num);
//   // 文字数表示部分の要素を取得
//   const characterCount = document.getElementById('characterCount');
//   // 残りの文字数をセットして表示
//   characterCount.textContent = num;
//   // 残り文字数表示部分のp要素を取得
//   const characterCountWrap = document.getElementById('characterCountWrap');
//   // 文字色の設定
//   if (num >= 0) {
//     characterCountWrap.style.color = 'black';
//   } else {
//     characterCountWrap.style.color = 'red';
//   }
// }

// const inputText = document.getElementById('inputText');
// inputText.addEventListener('keyup', keyUp, false);

// フォトギャラリー
const images = [
  {
    src: 'https://learnwithnakamura.s3.ap-northeast-1.amazonaws.com/javascript/C0zDWAPFT9A.jpg',
    description: '猫の画像1',
  },
  {
    src: 'https://learnwithnakamura.s3.ap-northeast-1.amazonaws.com/javascript/fEK4jvgnApg.jpg',
    description: '猫の画像2',
  },
  {
    src: 'https://learnwithnakamura.s3.ap-northeast-1.amazonaws.com/javascript/egfS7HzgKcc.jpg',
    description: '猫の画像3',
  },
  {
    src: 'https://learnwithnakamura.s3.ap-northeast-1.amazonaws.com/javascript/e-S23SJzFqs.jpg',
    description: '猫の画像4',
  },
  {
    src: 'https://learnwithnakamura.s3.ap-northeast-1.amazonaws.com/javascript/Hnwm8ktAd6E.jpg',
    description: '猫の画像5',
  },
];

// メイン画像の初期値を設定
let image = document.createElement('img');
image.setAttribute('src', images[0].src);
image.setAttribute('alt', images[0].description);

// 説明の初期値を設定
let description = document.createElement('p');
description.textContent = image.alt;

// 作成した要素を表示する
let mainimage = document.getElementById('main_image');
mainimage.insertBefore(image, null);
mainimage.insertBefore(description, null);

// サムネイル画像の表示
let thumbnails = document.getElementById('thumbnails');
for (let i = 0; i < images.length; i++) {
  let thumbnailsImage = document.createElement('img');
  thumbnailsImage.setAttribute('src', images[i].src);
  thumbnailsImage.setAttribute('alt', images[i].description);
  thumbnails.insertBefore(thumbnailsImage, null);
}

// クリックしたサムネイル画像をメイン画像に設定する
thumbnails.addEventListener(
  'click',
  function (e) {
    if (e.target.src) {
      // console.log(e.target);
      image.src = e.target.src;
      description.textContent = e.target.alt;
    }
  },
  false
);
