// 四角形の面積を計算する関数の作成
// 四角形の縦の長さと横の長さを引数に渡すと四角形の面積（縦×横）を計算して値を返す関数を作る

// 作った関数を使って高さ3m、横5mの四角形の面積を求めコンソールに出力する。単位は㎡とする。（単位は出力しなくて良い。）

// 方法１:function命令（関数宣言）
// function getRectangle(height, width) { //引数
//   return height * width; //戻り値
// }
// console.log(getRectangle(3, 5));

// 方法２:関数リテラル
// const getRectangle = function (height, width) {
//   return height * width;
// };
// console.log(getRectangle(3, 5));

// 方法3:Functionコンストラクター(あまり使わない)
// const getRectangle
//   = new Function('height', 'width', 'return height * width');
// console.log(getRectangle(3, 5));

// 方法4:アロー関数
// const getRectangle = (height, width) => {
//   return height * width;
// };
// console.log(getRectangle(3, 5));

// 46.演習問題
// function totalAmount(mikanPrice, number) {
//   return mikanPrice * number;
// }
// console.log(totalAmount(100, 20));

// コールバック関数　（（時間が掛かる）⚪︎⚪︎が完了したら、△△を実行する。）
// 例1.タイマー処理:3秒経過したらコンソールに「Timeout!」と表示する。
// const displayMessage = function () {
//   console.log('Timeout!');
// };
// setTimeout(displayMessage, 3000);

// // 例2.名前の入力が完了したら「Hello!⚪︎⚪︎-san.」とコンソールに表示する。
// function greeting(name) {
//   console.log('Hello!' + name + '-san.');
// }

// function inputUserName(callback) {
//   let name = prompt('あなたの名前を入力して下さい！');
//   callback(name);
// }
// inputUserName(greeting);

// 配列
// 宣言、初期化
// let colors = ['Red', 'Green', 'Blue'];
// console.log(colors);
// // console.log(colors[0]);
// // console.log(colors[1]);
// // console.log(colors[2]);
// // console.log(colors[3]); // undifined

// // // データ型
// // let arr = [1, '2', 3, ['a', 'b', 'c']];
// // console.log(arr);

// // // 個数
// // console.log(colors.length);

// // // 末尾の値を取得
// // console.log(colors[colors.length - 1]);

// // // 空の配列
// // let emptyArr = [];
// // console.log(emptyArr);

// // 配列の操作(55,56行目使用)
// // 末尾に追加
// colors.push('black');
// console.log(colors);

// // 先頭に追加
// colors.unshift('white');
// console.log(colors);

// // 更新
// colors[1] = '赤';
// console.log(colors);

// // 指定した位置に1つ以上の値を挿入
// let insertArr = ['a', 'b', 'c'];
// insertArr.splice(1, 0, 'D');
// console.log(insertArr);

// // 複数挿入
// insertArr.splice(2, 0, 'X', 'Y', 'Z');
// console.log(insertArr);

// // 指定した位置から削除
// insertArr.splice(2, 2);
// console.log(insertArr);

// // 結合
// let arr1 = ['a', 'b', 'c'];
// let arr2 = ['d', 'e', 'f'];
// let mergedArr = arr1.concat(arr2);
// console.log(mergedArr);
// console.log(arr1);
// console.log(arr2);

// // 先頭を削除
// let arr3 = ['a', 'b', 'c', 'd'];
// arr3.shift();
// console.log(arr3);

// // 末尾を削除
// arr3.pop();
// console.log(arr3);

// オブジェクト
// let user = new Object();
// user.name = 'Taro Yamada';
// user.gender = 'man';
// user.birthYear = 1990;
// console.log(user);

// オブジェクト初期化値
// let user = { name: 'Taro Yamada', gender: 'man', birthYear: 1990 };
// console.log(user);

// // ドット記述法
// console.log(user.name);
// console.log(user.gender);
// console.log(user.birthYear);

// // ブラケット記法
// console.log(user['name']);
// console.log(user['gender']);
// console.log(user['birthYear']);

// // 個数
// console.log(Object.keys(user).length);

// // プロパティ（key）を取得
// let keys = Object.keys(user);
// console.log(keys);

// // 値の追加
// // user.prefecture = 'Kanagawa';
// user['prefecture'] = 'Kanagawa';
// console.log(user);

// // 値の書き換え
// // user.prefecture = 'Chiba';
// user['prefecture'] = 'Chiba';
// console.log(user);

// // オブジェクトを結合して新しいオブジェクトを作成
// let obj1 = { a: 1, b: 2, c: 3 };
// let obj2 = { d: 4, e: 5, f: 6 };
// let mergedObj = Object.assign(obj1, obj2);
// console.log(mergedObj);

// // 空のオブジェクト
// let person = {};
// console.log(person);

// オブジェクトメソッド

let user = {
  name: 'Taro Yamada',
  gender: 'man',
  birthYear: 1990,
  calcAge: function (thisYear) {
    // console.log(birthYear); // NG
    // console.log(this);
    // console.log(this.birthYear);
    return thisYear - this.birthYear;
  },
};
console.log(user.calcAge(2024));
