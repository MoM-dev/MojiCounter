let textBox = document.getElementById('TextBox');
let msg = document.getElementById('msg');
let checkButton = document.getElementById('checkButton');

// テキストの改行、半角、全角スペースをすべて置換
function replaceText(textValue) {
    textValue = textValue.replace(/\n/g, ""); // 改行を全て置換
    textValue = textValue.replace(/ /g, "");  // 半角スペースを全て置換
    textValue = textValue.replace(/　/g, ""); // 全角スペースを全て置換
    return textValue;
}

// ボタンクリック時の処理
function buttonClick() {
    let textLeng = 0;
    textValue = replaceText(textBox.value);
    textLeng = textValue.length; // テキストの文字数

    msg.innerText = '文字数：' + textLeng;
}

checkButton.addEventListener('click', buttonClick);
