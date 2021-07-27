const password = 'TrustNo1';
const passwordInput = document.getElementsByClassName('password');
const okButton = document.getElementsByClassName('ok');
const launch = document.querySelector('.launch');

const controlElems = document.querySelectorAll('.control-elem');
function disabledElems () {
    for (let i = 0; i < controlElems.length; i++) {
        controlElems[i].setAttribute('disabled','true');
    }
}

function addElemsListener() {
    for (let i = 0; i < controlElems.length; i++) {
        controlElems[i].onchange = () => checkLaunch();
    }
}

function  checkLaunch() {
    for (let i = 0; i < controlElems.length; i++) {
        if ((i < 6) && (!controlElems[i].checked)) {
            return console.log(i, 'Not ready checkbox', controlElems[i].checked);
        }
        if ((i > 5) && !(controlElems[i].value === '100')) {
            return console.log(i, 'Not ready range', controlElems[i].value);
        }
    }
    launch.removeAttribute('disabled');
    return console.log('Ready');
}

addElemsListener();
disabledElems();
launch.setAttribute('disabled', 'true');

function checkPassword() {
  if (passwordInput[0].value === password) {
      for (let i = 0; i < controlElems.length; i++) {
          controlElems[i].removeAttribute('disabled');
      }
      return console.log('Success')
  } else {
      disabledElems();
      return console.log('Wrong password', passwordInput[0].value);
  }
}

okButton[0].addEventListener('click', event => checkPassword(event));

const rocket = document.querySelector('.rocket');
//------js animation--------
let x = Number(getComputedStyle(rocket).left.substr(0, getComputedStyle(rocket).left.length - 2));
let y = Number(getComputedStyle(rocket).bottom.substr(0, getComputedStyle(rocket).bottom.length - 2));

launch.addEventListener('click', () => {
    launch.setAttribute('disabled', 'true');
//    rocket.style.left = document.documentElement.clientWidth.toString() + 'px';
//    rocket.style.bottom = document.documentElement.clientHeight.toString() + 'px';
    const rocketTimer = setInterval(() => {
        x += 10;
        rocket.style.left = x + "px";
        y += 15;
        rocket.style.bottom = y + "px";
        if (x > document.documentElement.clientWidth || y > document.documentElement.clientHeight) {
            clearInterval(rocketTimer);
            console.log('stop');
        }
    }, 20);
    return console.log('Start!!!');
})
