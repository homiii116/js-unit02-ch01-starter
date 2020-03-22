import _ from 'lodash';

let counter = 0;

function addRandomNum() {
  if (counter < 5) {
    const mainEl = document.getElementById('main');
    let p = document.createElement('p')
    p.innerHTML = "Random Number: " + _.random(0, 10).toString();
    document.body.appendChild(p);
    counter++;
  }
}

function recordNumber() {
  const button1 = document.getElementById('button1');
  button1.addEventListener("click", addRandomNum);
  console.log("ready");
}

recordNumber();




