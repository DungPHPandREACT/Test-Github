// Cách 1
// Khởi tạo mảng rỗng
// const listNumber = []

// // Khởi tạo mảng đã có sẵn các phần tử
// const listNumber = [1, 2, 3, true, 'name', null, undefined];

// // Cách 2
// // const listNumber = new Array(1, 2, 3);

// // In toàn bộ mảng
// console.log(listNumber);
// // Lấy 1 phần tử ở vị trí index = 1
// console.log(listNumber[1]);

// 1. Hãy khai báo 2 mảng. Mỗi mảng đều có 3 phần tử lần lượt là ‘a’, ‘b’, ‘c’.
// Cho biết kiểu dữ liệu của 2 mảng đó?
// Sử dụng toán tử ‘+’ để ‘cộng’ 2 mảng đó và cho biết kết quả?
// Sử dụng toán tử ‘==’ để so sánh 2 mảng đó và cho biết kết quả?

// const arr1 = ['a', 'b', 'c'];
// // giá trị của arr1 được lưu ở địa chỉ ô nhớ ABC
// const arr2 = ['a', 'b', 'c'];
// // giá trị của arr2 được lưu ở địa chỉ ô nhớ XYZ
// // ['a', 'b', 'c','a', 'b', 'c']
// console.log(arr1 == arr2);

// Truy xuất & thay đổi giá trị của 1 phần tử.
// const listNumber = [1, 2, 3, true, undefined, 100];
// console.log(listNumber);
// listNumber[3] = false;
// console.log(listNumber);

// Duyệt mảng.
// console.log(listNumber[0]);
// console.log(listNumber[1]);
// console.log(listNumber[2]);
// console.log(listNumber[3]);
// console.log(listNumber[4]);
// console.log(listNumber[5]);

// console.log(listNumber.length);

// for (let i = 0; i < listNumber.length; i++) {
// 	console.log(listNumber[i]);
// }

// Thêm / Xoá phần tử trong mảng.
// Thêm
const listNumber = [1, 2, 3, true, undefined, 100];
console.log(listNumber);
// Thêm 1 hoặc nhiều phần tử vào cuối mảng
// listNumber.push(200, 300, 400);
// Thêm 1 hoặc nhiều phần tử vào đầu mảng
// listNumber.unshift(200, 300, 400);
// Xóa phần tử cuối mảng
// listNumber.pop();
// listNumber.pop();
// Xóa phần tử đầu mảng
// listNumber.shift();
// listNumber.shift();
// console.log(listNumber);

// Tìm kiếm / Lọc / Biến đổi, …

// BT. Khai báo 1 mảng gồm các số bất kỳ.
const numbers = [5, 6, 7, 3, 4, 8, 9, 10];
// Hãy in ra các số chẵn trong mảng đó.
// for (let i = 0; i < numbers.length; i++) {
// 	if (numbers[i] % 2 === 0) {
// 		console.log(numbers[i]);
// 	}
// }
// Hãy tính tổng các phần tử trong mảng.
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
// 	sum = sum + numbers[i];
// }
// console.log(sum);
// // Hãy tìm phần tử nhỏ nhất trong mảng.
// let min = numbers[0];
// for (let i = 0; i < numbers.length; i++) {
// 	if (numbers[i] < min) {
// 		min = numbers[i];
// 	}
// }

// console.log(min);

const arr = [[4, 5, 6], 2, 3];
console.log(arr[0][2]);
