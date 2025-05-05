function testAllTasks() {
	console.log("Task 1 (min1):", min1(5, 10)); // 5
	console.log("Task 2 (min2):", min2(15, 7)); // 7
	console.log("Task 3 (min3):", min3(12, 12)); // 12

	console.log("Task 4 (setPerson):", setPerson("Іванов", "Іван", "Іванович")); // Іванов Іван Іванович
	console.log("Task 4 (без по батькові):", setPerson("Петренко", "Петро")); // Петренко Петро

	console.log("Task 5 (setPerson2):", setPerson2("Сидоренко", "Олена", "Миколаївна")); // Сидоренко Олена Миколаївна

	const sumFunc = (a, b) => a + b;
	console.log("Task 6 (useOtherFun):", useOtherFun(sumFunc, 8, 3)); // 11

	console.log("Task 7 (sum):", sum(1, 2, 3, 4, 5)); // 15
	console.log("Task 8 (sum2):", sum2(10, 20, 30)); // 60

	console.log("Task 9 (getFuncByArg - jpg):");
	getFuncByArg("jpg")(); // викликає alert для JPG

	console.log("Task 9 (getFuncByArg - png):");
	getFuncByArg("png")(); // викликає alert для PNG

	console.log("Task 9 (getFuncByArg - невідомий):");
	getFuncByArg("pdf"); // alert про невідомий формат
}

// Task 1
function min1(a, b) {
	return a > b ? b : a;
}

// Task 4
function setPerson(name, surname, fatherName = "") {
	return (name + " " + surname + 
		(fatherName != "" ? " " + fatherName : ""));
}

// Task 6
function useOtherFun(func, a, b) {
	return func(a, b);
}

// Task 7
function sum() {
	let result = 0;
	for (i = 0; i < arguments.length; i++) {
		result += arguments[i];
	}
	return result;
}

function alertJpg() {
	console.log("функція опрацювання файлів JPG");
}

function alertPng() {
	console.log("функція опрацювання файлів PNG");
}

// Task 9
function getFuncByArg(arg) {
	switch (arg) {
		case "jpg":
			return alertPng;
		case "png":
			return alertJpg;
		default:
			console.log("такого формата не існує")
	}
}

// Task 2
let min2 = function(a, b) {
	return a > b ? b : a;
}

// Task 3
let min3 = (a, b) => a > b ? b : a;

// Task 5
let setPerson2 = function (name, surname, fatherName = "") {
	return (name + " " + surname + 
		(fatherName != "" ? " " + fatherName : ""));
}

// Task 8
let sum2 = (...args) => {
	let result = 0;
	for (i = 0; i < args.length; i++) {
		result += args[i];
	}
	return result;
}

testAllTasks();