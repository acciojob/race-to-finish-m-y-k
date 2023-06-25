window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

let a = new Promise(resolve => {
	setTimeout(() => {
		resolve("a");
	}, 1000);
});
let b = new Promise(resolve => {
	setTimeout(() => {
		resolve("a");
	}, 2000);
});
let c = new Promise(resolve => {
	setTimeout(() => {
		resolve("a");
	}, 3000);
});
let d = new Promise(resolve => {
	setTimeout(() => {
		resolve("a");
	}, 4000);
});
let e = new Promise(resolve => {
	setTimeout(() => {
		resolve("a");
	}, 5000);
});
let x = Promise.any([a, b, c, d, e]);
window.promises = [a, b, c, d, e];
x.then((data) => {
    const ele = document.getElementById("output");
	ele.innerText = data;
  });
