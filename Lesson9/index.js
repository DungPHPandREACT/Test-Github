// C: create:khởi tạo
// Cách 1:
const student = {
	name: 'Trần Thị A',
	1: 18,
	gender: 'girl',
	point: 9,
	weight: 50,
	lover: {
		name: 'Trần Tùng',
		age: 20,
	},
	property: 'success',
};

// Cách 2
// const teacher = new Object({
// 	name: 'Nguyễn Thị C',
// });

// Cách truy xuất value (read)
// Cách 1
const property = 'name';
// console.log(student.property);
// Cách 2
// console.log(student['1']);

// Update giá trị
// console.log(student);
// student[property] = 'Trần Văn C';
// console.log(student);

// Delete
// console.log(student);
// delete student.name;
// console.log(student);

// Duyệt object
// for (let prop in student) {
// 	console.log('giá trị đang được duyệt: ', student[prop]);
// }

// let numbers = [1, 2, 3, 4, 5];
// for (let element of numbers) {
// 	console.log('element: ', element);
// }

// Object.keys => trả về toàn bộ key có trong object dưới dạng array
// console.log(Object.keys(student))
// Object.values => trả về toàn bộ value có trong object dưới dạng array
// console.log(Object.values(student))

// nameObject.hasOwnProperty(key)
// Nếu key có trong object nameObject => trả về true
// Nếu key chưa có trong object nameObject => trả về false
// console.log(student.hasOwnProperty('name'));

// BT thực hành, viết đoạn code để kiểm tra xem 3,6,7 có phải
// là số nguyên tố không

let number1 = 3,
	number2 = 6,
	number3 = 7;

let count1 = 0,
	count2 = 0,
	count3 = 0;

// function checkSNT(number) {
// 	let count = 0;
// 	for (let i = 0; i <= number; i++) {
// 		if (number % i === 0) {
// 			count++;
// 		}
// 	}
// 	if (count === 2) {
// 		console.log(number, ' là số nguyên tố');
// 	} else {
// 		console.log(number, ' không phải là số nguyên tố');
// 	}
// }

// checkSNT(3);
// checkSNT(6);
// checkSNT(7);
// checkSNT(9);
// checkSNT(11);

// Cách để khởi tạo 1 function
// function tenHam (parameter1,...,parameterN){
//     //code thực thi
// }

function logger(name, age) {
	console.log('Hôm nay đẹp trời');
	console.log('Xin chào bạn ', name);
	console.log('Tuổi: ', age);
}

// const name1 = 'A';
// const age1 = 19;
// logger(name1); // Xin chào bạn A

// function maxNumber(a, b) {
// 	let max = a;
// 	if (b > a) {
// 		max = b;
// 	}

// 	return max;
// }

// const number = maxNumber(3, 6);

// console.log('number: ', maxNumber(3, 6));

// 1. Khai báo 1 function nhận đầu vào là chuỗi name,
// thực hiện in ra màn hình “Hello world, ” + name.
function logger(name) {
	console.log('Hello world ' + name);
}
const name1 = 'Huy';
logger(name1);

// 2. Khai báo 1 function nhận đầu vào là 2 số a, b. Đầu ra là kết quả của phép tính
// (a + b)^2 .
function calculator(a, b) {
	return (a + b) ** 2;
}
const number = calculator(6, 8);
console.log('number: ', number);
console.log('number: ', calculator(6, 8));

// 3. Khai báo 1 function để nhập vào a từ bàn phím,
// tiếp tục nhập đến khi a là một số lớn hơn 0. Đầu ra là giá trị số vừa nhập.

// function inputNumber() {
// 	let a;
// 	for (; true; ) {
// 		a = prompt('Mời bạn nhập số a');
// 		if (a > 0) {
// 			break;
// 		}
// 	}

// 	return a;
// }
// console.log(inputNumber());

function loggerTimeout() {
	console.log('setTimeout');
}

// setTimeout(loggerTimeout, 5000);

// let time = setInterval(function () {
// 	console.log('setInterval');
// }, 2000);

// 2. Khai báo 1 function với đầu vào là 3 số a, b, c.
// Kiểm tra xem a, b, c có tạo thành 3 cạnh của tam giác không.
// Nếu tạo thành tam giác, đầu ra là true. Ngược lại, đầu ra là false.

function checkTamGiac(a, b, c) {
	if (a + b > c && a + c > b && b + c > a) {
		return true;
	} else {
		return false;
	}
}
console.log(checkTamGiac(2, 5, 8));

// 1. Khai báo 1 function với đầu vào là 3 số a, b, c (a khác 0).
// Hãy tìm nghiệm của phương trình a.x^2 + b.x + c = 0
// và đưa ra kết quả dưới dạng 1 mảng gồm các nghiệm của phương trình.

function calculatorPT2(a, b, c) {
	const delta = b ** 2 - 4 * a * c;

	if (delta < 0) {
		return [];
	} else if (delta === 0) {
		const result = -b / (2 * a);
		return [result];
	} else {
		const result1 = (-b + Math.sqrt(delta)) / (2 * a);
		const result2 = (-b - Math.sqrt(delta)) / (2 * a);
		return [result1, result2];
	}
}
console.log(calculatorPT2(2, 9, 4));
