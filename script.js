'use strict';

document.getElementById('color-button').addEventListener('click', changeColor)

/**
 * @returns {number} 0~255までのランダムな数値を生成する 
 */
const colorNumber = () => {
  return Math.floor(Math.random() * 256);
}

/**
 * 3つのランダムな数値をrgbに入れ背景色を変更する
 */
function changeColor() {
  let colorR = colorNumber(), colorG = colorNumber(), colorB = colorNumber();
  document.body.style.backgroundColor = `rgb(${colorR},${colorG},${colorB})`
}


/**
 * 選択した文字サイズに応じて一部文字サイズを変更する
 */
const changeSize = () => {
  let fontSize = document.getElementById("fontSizeSelect");
  switch (fontSize.value) {
    case "big":
      document.getElementsByTagName("button")[0].style.fontSize = "30px";
      break;
    case "middle":
      document.getElementsByTagName("button")[0].style.fontSize = "20px";
      break;
    case "small":
      document.getElementsByTagName("button")[0].style.fontSize = "10px";
      break;
  }
}

document.getElementById("fontSizeSelect").addEventListener("change", changeSize)

/**
 * 言語選択によって一部表記が選択した言語に置き換わる
 */
const changelang = () => {
  let lang = document.getElementById("langSelect");
  switch (lang.value) {
    case "jpn":
      document.getElementsByTagName("button")[0].innerHTML = "背景色を変更！";
      document.getElementsByTagName("h1")[0].innerHTML = "最終 アセスメント";
      document.getElementById("langSelectText").innerHTML = "言語選択";
      document.getElementById("SizeSelectText").innerHTML = "文字サイズ";
      document.getElementById("title").innerHTML = "踊ろう！";
      break;
    case "eng":
      document.getElementsByTagName("button")[0].innerHTML = "Change color";
      document.getElementsByTagName("h1")[0].innerHTML = "Final Asesment";
      document.getElementById("langSelectText").innerHTML = "language";
      document.getElementById("SizeSelectText").innerHTML = "Font Size";
      document.getElementById("title").innerHTML = "Let's Dance!";
      break;
    case "che":
      document.getElementsByTagName("button")[0].innerHTML = "更改颜色";
      document.getElementsByTagName("h1")[0].innerHTML = "最后评估";
      document.getElementById("langSelectText").innerHTML = "语言选择";
      document.getElementById("SizeSelectText").innerHTML = "字体大小";
      document.getElementById("title").innerHTML = "我们跳舞吧！";
      break;
    case "ko":
      document.getElementsByTagName("button")[0].innerHTML = "색상 변경";
      document.getElementsByTagName("h1")[0].innerHTML = "최종 평가";
      document.getElementById("langSelectText").innerHTML = "언어 선택";
      document.getElementById("SizeSelectText").innerHTML = "문자 크기";
      document.getElementById("title").innerHTML = "춤추자!";
      break;
  }
}

document.getElementById("langSelect").addEventListener("change", changelang)




/**
 * @returns {function} 画像が反転していなければ画像反転させる　そうでなければ元に戻す関数を返す
 */
const invertImg = () => {
  let invert = false;
  return () => {
    const danceImg = document.getElementById("danceImg");
    const danceKeyfreams = new KeyframeEffect(
      danceImg, 
      [
        {transform: "translate(0, 20px)" },
        {transform: "translate(0, 0)" }
      ], 
      {
        duration: 450,
        iterations: 3,
      }
    );
    const jumpAnimation = new Animation(danceKeyfreams, document.timeline);

    if(invert) {
      // jumpAnimation.play();
      danceImg.style.transform = "scale(1, 1)";
    } else {
      // jumpAnimation.play();
      danceImg.style.transform = "scale(-1, 1)";
    }
    // jumpAnimation.play();
    invert = !invert;
  }
};

const changeImg = invertImg();

document.getElementById('color-button').addEventListener("click", changeImg);
