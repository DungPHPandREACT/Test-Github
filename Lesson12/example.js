// Viết một function đảo ngược một string bất kỳ, sử dụng các phương thức của array.

// Input: "abcdef"
// Ouput: "fedcba"

// const reverseString = (string) => {
// 	// Cách 1
// 	// let result = '';

// 	// for (let i = string.length - 1; i >= 0; i--) {
// 	// 	result = result + string[i];
// 	// }

// 	// return result;

// 	// Cách 2
// 	return [...string].reverse().join('');
// };
// console.log(reverseString('abcdef'));

// Bài 2: Sử dụng map()
// với arr = [1,54,6,7] để tạo ra một newArr có newArr[i] = arr[i] + 5.
// [1,54,6,7] => [6, 59, 11, 12]
const arr = [1, 54, 6, 7];
// const newArr = [];
// for (let e of arr) {
// 	newArr.push(e + 5);
// }
// console.log(newArr)

// syntax
// array.map(callback);
// array: hàm ban đầu
// callback: function xử lý nghiệp vụ => callback sẽ nhận vào 3 tham số
// +value: => trả về phần tử đang được duyệt
// +index: => trả về vị trí của phần tử đang được duyệt

const newArr = arr.map((value, index) => value + 5);

// listNumber = [1,2,3,4,5,6,7,8,9]
// tạo ra một mảng mới có các phần tử là số lẻ
const listNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const newListNumber = [];
// for (let number of listNumber) {
// 	if (number % 2 === 1) {
// 		newListNumber.push(number);
// 	}
// }
// console.log(newListNumber);

const newListNumber = listNumber.filter((number) => {
	return number % 2 === 1;
});

console.log(newListNumber);
