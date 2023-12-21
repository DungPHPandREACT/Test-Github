// 1. Khai báo 1 mảng gồm các số bất kỳ.
const arrNumber = [-3, -10, 20, 86, 4, 17, 23, -12, 100];
// Tính tích của các phần tử trong mảng đó.
let value = 1;
for (let i = 0; i < arrNumber.length; i++) {
	value = value * arrNumber[i];
}
console.log(value);

// Tìm số nhỏ nhất mà chia hết cho 2 trong mảng.
// Bước 1: tạo ra 1 mảng mới gồm các số chia hết cho 2 trong mảng
// const newArr = [];
for (let i = 0; i < arrNumber.length; i++) {
	if (arrNumber[i] % 2 === 0) {
		newArr.push(arrNumber[i]);
	}
}
console.log(newArr);
// // Bước 2: tìm min trong mảng vừa tạo
let min = newArr[0];
for (let i = 0; i < newArr.length; i++) {
	if (newArr[i] < min) {
		min = newArr[i];
	}
}
console.log(min);

// Tìm số lớn nhất mà chia hết cho 3 trong mảng.
// Tính giá trị trung bình của mảng.
let sum = 0;
for (let i = 0; i < arrNumber.length; i++) {
	sum = sum + arrNumber[i];
}

const avg = sum / arrNumber.length;
console.log(avg);

// Lọc ra các số nguyên tố trong mảng.
const newNumbers = [];
for (let i = 0; i < arrNumber.length; i++) {
	const elementCurrent = arrNumber[i];
	let count = 0;
	for (let j = 1; j <= elementCurrent; j++) {
		if (elementCurrent % j === 0) {
			count++;
		}
	}
	if (count === 2) {
		newNumbers.push(elementCurrent);
	}
}
console.log(newNumbers);

// Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không.
let isNumber = false;
for (let i = 0; i < newNumbers.length; i++) {
	if (newNumbers[i] < 10) {
		isNumber = true;
		break;
	}
}
if (isNumber === true) {
	console.log('Trong mảng có số nhỏ hơn 10');
} else {
	console.log('Trong mảng không có số nhỏ hơn 10');
}

// Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không.

// Nhập vào số n cho đến khi n là 1 số trong mảng s.
for (; true; ) {
	const number = Number(prompt('Mời bạn nhập số'));
	if (arrNumber.includes(number) === true) {
		alert('Số bạn nhập có trong mảng');
		break;
	} else {
		alert('Số bạn nhập không tồn tại trong mảng');
	}
}

// Sử dụng thuật toán Bubble Sort để sắp xếp phần tử theo thứ tự tăng dần.
