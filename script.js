window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

let a = new Promise(resolve => {
	resolve("a");
}, 1000);
promises.push(a);
let b = new Promise(resolve => {
	resolve("b");
}, 2000);
promises.push(b);
let c = new Promise(resolve => {
	resolve("c");
}, 3000);
promises.push(c);
let d = new Promise(resolve => {
	resolve("d");
}, 4000);
promises.push(d);
let e = new Promise(resolve => {
	resolve("e");
}, 5000);
promises.push(e);

let x = Promise.any(window.promises);

const div = document.getElementById("output");
div.innerText = x;
document.body.appendChild(div);