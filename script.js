//label要素の呼び出し
const heightInput = document.querySelector('.height input');
const weightInput = document.querySelector('.weight input');
const resultOutput = document.querySelector('.result input');

// 身長のインプット欄に入力された時の動作
heightInput.addEventListener('input', () => {
    // .valueでinputに入力された文字を取り出す
    const height = document.querySelector('.height input').value; 
    console.log(height);
});

// 体重のインプット欄に入力された時の動作
weightInput.addEventListener('input', () => {
    const weight = document.querySelector('.weight input').value;
    console.log(weight)
});

// button要素を呼び出す
const clickbutton = document.querySelector('button');

// buttonを押したときの動作
// const heightとconst weightは前述してるが、イベント内で取得した値はそのイベント内だけ
clickbutton.addEventListener('click', () => {
    // heightInputとweightInput(input要素そのもの)は常に最新の値を保持
    const height = heightInput.value;
    const weight = weightInput.value;
    const calculation =  weight/ (height / 100) ** 2;
    resultOutput.value = calculation.toFixed(1)
})

// resetボタンの呼び出し
const resetbutton = document.querySelector('.reset');

//リセットボタン押したときの動作
resetbutton.addEventListener('click', () => {
  heightInput.value  = '';
  weightInput.value  = '';
  resultOutput.value = '';
});





