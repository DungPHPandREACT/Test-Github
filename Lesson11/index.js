// import { log } from './functions.js';

// console.log(log('AAA'));

// function sum(a, b) {
// 	return a + b;
// }
// => có context

// const sum = (a, b) => {
// 	return a + b;
// };

// const sum = (a, b) => ({ sum: a + b });

// => không có context
// console.log(sum(3, 5));

// Đây là dòng 1
// Đây là dòng 2
// const str1 = 'Đây là dòng 1';
// const str2 = 'Đây là dòng 2';
// console.log(str1);
// console.log(str2);

// const str1 = `Đây là dòng 1
// Đây là dòng 2
// Đây là dòng 3`;
// console.log(str1);

// const course1 = 'JAVASCRIPT';
// const course2 = 'HTML';
// const course3 = 'CSS';
// Đây là khóa học course1, course2 và course3 ở T3H

// const str =
// 	'Đây là khóa học ' + course1 + ', ' + course2 + ' và ' + course3 + ' ở T3H';

// const str = `Đây là khóa học ${course1}, ${course2} và ${course3} ở T3H`;

// console.log(str);

// console.log(newLogger('Trần Văn A'));
// console.log(PI);

// const sum = (...listNumber) => {
// 	let sum = 0;
// 	for (let number of listNumber) {
// 		sum += number;
// 	}

// 	return sum;
// };
// console.log(sum(1, 2, 3, 4));
// console.log(sum(1, 2, 3, 4, 5, 6));
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));
// console.log(sum(1, 2, 4));

// Rest operator
// Agrument
// const logger = (a, b, c, ...number) => {
// 	console.log(a); //1
// 	console.log(b); //2
// 	console.log(c); //undefined
// 	console.log(number); // []
// };

// logger(1, 2, 3, 4, 5, 6, 7, 8);

// const student1 = { name: 'Trần Văn A', age: 18 }; //xyz
// const student2 = { gender: 'boy', name: 'Tiến Tùng', ...student1 }; //
// // => student2 và student1 => đang quản lý chung địa chỉ xyz
// // student2.name = 'Nguyễn Văn B';
// console.log(student1);
// console.log(student2);

const arr1 = [1, 2, 3];
const arr2 = [4, ...arr1, 5, 6, ...arr1, ...arr1, ...arr1];
console.log(arr1);
console.log(arr2);
