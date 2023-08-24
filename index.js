// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//tipe data
let number = 10;
const angka2 = 10.2;
var angka = 100;
console.log('Angka ', angka2);

let text = '100';
console.log('text', text);
let isTrue = false;
console.log('isTrue', isTrue);
let fruits = [true, 100, 'pisang'];
console.log('fruits', fruits);
let person = { name: 'John', age: 25, gender: true };
console.log('object person', person);

//operator
let num1 = 10;
let num2 = 5;

let sum = num1 * num2;
console.log('sum', sum);
let isGreater = num1 > num2;
console.log('aku ganteng', isGreater);
let aldi = (true || false) && (false||true);
console.log('dibimbing', aldi);
let assignment = 10;
console.log('asigment', assignment);
assignment += 5;
console.log('asigment', assignment);
assignment *= 100;
console.log('asigment 100', assignment);
let result = num1 > num2 ? 'Lebih besar' : 'Lebih kecil sama dengan';
console.log('result', result);
const beli = 'ikan';
let warung = beli == 'ikan' ? 'beli ikan' : 'beli susu';
console.log('warung', warung);
//percabangan
let num = 10;

if (num > 0) {
  console.log('Angka positif');
} else if (num < 0) {
  console.log('Angka negatif');
} else {
  console.log('Angka nol');
}

let uang = 1100;
if (uang > 100) {
  console.log('duit lebih dari 100');
} else if (uang > 1000) {
  console.log('duit lebih dari 1000');
} else if (uang > 10000) {
  console.log('duit lebih dari 10.000');
} else {
  console.log('duitnya kurang dari 100');
}
