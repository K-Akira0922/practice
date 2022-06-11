
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

// 時間を表示
function showTime() {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

// AM or PM
  const amPm = hour >= 12? 'PM' : 'AM';

  hour = hour % 12 || 12;

  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}  ${showAmPm ? amPm : ''}`;

  setTimeout(showTime, 1000);
}
const showAmPm = true;

// 背景と挨拶を設定する

function setBgGreet() {
  let today = new Date();
  let hour = today.getHours();

  // if(hour < 12){
  //   // 朝
    
  if(hour === 10 || hour === 15){
    // 休憩
    document.body.style.backgroundImage = "url('img/20210412234342休憩.jpg')";
    greeting.textContent = 'そろそろちょっと休憩にしませんか';
  } else if (hour < 12) {
    // 朝
    document.body.style.backgroundImage = "url('img/DSC_7627+.JPG')";
    greeting.textContent = 'おはようございます。朝ですね';
  } else if (hour < 18) {
    // 昼
    document.body.style.backgroundImage =  "url('img/QO007835昼.jpeg')";
    greeting.textContent = 'こんにちは。お昼ですね';
  } else {
    // 夜
    document.body.style.backgroundImage =  "url('img/EFqykyaUEAAuaxA夜.jpeg')";
    greeting.textContent = 'こんばんは。もう夜ですね';
    document.body.style.color ='white';
  }
}

// 名前の取得
function getName() {
  if(localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// 名前の設定
function setName(e){
  if(e.type === 'keypress'){
    if(e.which == 13 || e.keyCode == 13){
      localStorage.setItem('name',e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// 何をやるか
function getFocus() {
  if(localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

// 秒数を0ではなく00にする
function addZero(n) {
  return(parseInt(n, 10) < 10 ? '0' : '') + n;
}

name.addEventListener('keypress',setName);
name.addEventListener('blur',setName);
focus.addEventListener('keypress', setFocus);	
focus.addEventListener('blur', setFocus);	



showTime();
setBgGreet();
getName();
getFocus();