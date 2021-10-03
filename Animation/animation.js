/**
 * h1要素を格納する変数
 */
let header = document.getElementById('header');

/**
 * 文字の回転角度を格納する変数
 */
let degree = 0;

/**
 * 文字を回転させる関数
 */
function rotateHeader() 
{
    // 角度を6度ずつ足していく
    degree = degree + 6;

    // 360で割った余りを計算して、degreeの値を0~359に収めます
    degree = degree % 360;

    // 角度によって色を変更する
    if ((0 <= degree && degree < 90) || (270 <= degree && degree < 360)) {
        header.className = 'face';
    } else {
        header.className = 'back';
    }

    header.style.transform = `rotateX(${degree}deg)`;
}

// 20ミリ秒ごとに文字の回転を行う
setInterval(rotateHeader, 20);