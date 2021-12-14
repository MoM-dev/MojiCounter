let textBox = document.getElementById('TextBox');
let msg = document.getElementById('msg');
let checkButton = document.getElementById('checkButton');

// ボタンクリック時の処理
function buttonClick() {
    let textLeng = 0;
    textLeng = textBox.value.trim().length; // 空白を除くテキストの文字数

    msg.innerText = '文字数：' + textLeng;
}

checkButton.addEventListener('click', buttonClick);