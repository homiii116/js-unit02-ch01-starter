import _ from 'lodash';

let randomArray = [];

function addRandomNum() {
  document.getElementById('main');
  let p = document.createElement('p');
  const random =  _.random(0, 10);
  randomArray.push(random);
  p.innerHTML = "Random Number: " + random.toString();
  document.body.appendChild(p);
}

function recordNumber() {
  const button1 = document.getElementById('button1');
  button1.addEventListener("click", addRandomNum);
  console.log("ready");
}

recordNumber();

function sumNumber() {
  document.getElementById('main');
  let p = document.createElement('p');
  const sum = _.sum(randomArray.slice(0,5));
  p.innerHTML = "Sum Number:" + sum.toString();
  document.body.appendChild(p);
}

function recordSumNumber() {
  const button2 = document.getElementById('button2');
  button2.addEventListener("click", sumNumber);
  console.log("sum");
}

recordSumNumber();




