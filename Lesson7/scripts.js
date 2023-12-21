// if(condition){
//block codee
// }

// let point = 8.5;

// if (point >= 8) {
// 	console.log('học sinh giỏi');
// } else {
// 	console.log('chưa đạt học sinh giỏi');
// }

// điểm >= 8.0 => học sinh giỏi
// 6.5 <= điểm < 8.0 => học sinh khá
// điểm < 6.5 => học sinh trung bình

// const point = 7.0;

// Cách 1
// if (point >= 8.0) {
// 	console.log('Học sinh giỏi');
// }
// if (6.5 <= point && point < 8.0) {
// 	console.log('Học sinh khá');
// }
// if (point < 6.5) {
// 	console.log('Học sinh trung bình');
// }

// if(condition1){
//     code 1
// } else if(condition2){
//     code 2
// } else if (condition3){
//     code 3
// } else ... if(conditionN){
//     code N
// } else {
//     code else
// }
// Cách 2
// const point = prompt('Mời bạn nhập giá trị');
// if (point >= 8.0) {
// 	console.log('Học sinh giỏi');
// } else if (point >= 6.5 && point < 8.0) {
// 	console.log('Học sinh khá');
// } else {
// 	console.log('Học sinh trung bình');
// }

// 0. Hãy viết chương trình nhập vào một chuỗi s.
// Nếu chuỗi s có độ dài >= 8, in ra màn hình console “Chuỗi này ok”.
// Ngược lại, in ra “Ngắn quá, dài thêm tí nữa”.

// let s = prompt('Nhập vào chuỗi s');
// if (s.length >= 8) {
// 	console.log('Chuỗi này ok');
// } else {
// 	console.log('Ngắn quá, dài thêm tí nữa');
// }

// 1. Hãy viết chương trình nhập vào một số a.
// Nếu a >= 18, in ra màn hình console “Đủ 18 thì quẩy tiếp”.
// Nếu a >= 16, in ra “Đợi thêm ít năm nữa”.
// Ngược lại, in ra “Còn trẻ quá”.
// let a = prompt('Mời bạn nhập số a');
// console.log('giá trị a vừa nhập: ', a);
// if (a >= 18) {
// 	console.log('Đủ 18 thì quẩy tiếp');
// } else if (a >= 16) {
// 	console.log('Đợi thêm ít năm nữa');
// } else {
// 	console.log('Còn trẻ quá');
// }

// In ra màn hình từ 1-20;
// for (let i = 1; i <= 5; i++) {
// 	console.log('Giá trị: ', i);
// }

// * In ra dãy số từ 1 đến 100.
// for (let i = 1; i <= 100; i++) {
// 	console.log(i);
// }

// // * In ra dãy số từ 100 về 1.
// for (let i = 100; i >= 1; i--) {
// 	console.log(i);
// }

// * In ra màn hình các số chia hết cho 2 trong đoạn từ 1 -> 120
// for (let i = 1; i <= 120; i++) {
// 	if (i % 2 == 0) {
// 		console.log(i);
// 	}
// }

// for (let i = 2; i <= 120; i = i + 2) {
// 	console.log(i);
// }

// Ví dụ while

// let theNumber = Math.floor(Math.random() * 100);
// while (theNumber >= 5) {
// 	console.log(theNumber);
// 	theNumber = Math.floor(Math.random() * 100);
// }

// console.log('Kết quả: ' + theNumber);

// let i = 1;

// while (i <= 120) {
// 	if (i % 2 === 0) {
// 		console.log(i);
// 	}
// 	i++;
// }

// while(false){
//     // block code
// }

// do {
//     // block code
// } while (false)

// let i = 10;

// // while (i < 10) {
// // 	console.log('Giá trị i: ', i);
// // }

// do {
// 	console.log('Giá trị i: ', i);
// } while (i < 10);

// for (let i = 1; i <= 5; i++){
// 	if (i === 3) {
// 		continue;
// 	}
// 	console.log(i);
// }

// for: khi mà biết trước số lần lặp
// while, do while: khi chưa biết số lần lặp
// do while: sẽ thực hiện vòng lặp ít nhất 1 lần (dù điều kiện sai)
// break: khi gặp sẽ dừng vòng lặp ngay lập tức
// continue: khi gặp sẽ skip qua bước đó và sang bước tiếp theo

// 1. In ra dãy số từ 1 đến 500.
// for (let i = 1; i <= 500; i++) {
// 	console.log(i);
// }

// 2. In ra các số chia hết cho 2 và 3 từ 1 đến 300.
// for (let i = 1; i <= 300; i++) {
// 	if (i % 2 === 0 && i % 3 === 0) {
// 		console.log(i);
// 	}
// }

// 3. Tính tổng các số chẵn trong đoạn [-30, 50].
// let sum = 0;
// for (let number = -30; number <= 50; number++){
// 	if (number % 2 === 0) {
// 		sum = sum + number;
// 	}

// 	console.log(sum);
// }
// NaN => not a number

// 4. Nhập vào số n. Tính giai thừa của số n.
// let n = prompt('Mời bạn nhập n: ');
// let n = 6;
// let gt = 1;

// for (let i = 1; i <= n; i++) {
// 	gt = gt * i;
// }

// console.log(gt);

// 8. Nhập vào số n. Viết chương trình kiểm tra xem n có phải số nguyên tố không.
// const n = Number(prompt('Mời bạn nhập số n:'));

// let count = 0;
// for (let i = 1; i <= n; i++) {
// 	if (n % i === 0) {
// 		count++;
// 		console.log('n chia hết cho ', i);
// 	}
// }

// if (count === 2) {
// 	console.log('Đây là số nguyên tố');
// } else {
// 	console.log('Không phải số nguyên tố');
// }

// 12. Trò chơi đoán số:
// Máy tính tự động tạo ra 1 số correct bất kỳ từ 1 đến 20.
// Người dùng nhập vào 1 số answer. Nếu answer bằng correct → in ra “Đoán đúng”.
// Ngược lại → in ra “Đoán sai” và yêu cầu nhập lại answer.
// Nếu nhập sai answer quá 5 lần → in ra “Bạn đã thua cuộc”.

const numberRandom = Math.floor(Math.random() * 10 * 2 + 1);
console.log('numberRandom: ', numberRandom);
let count = 1;

for (let i = 1; i <= 5; i++) {
	const number = Number(prompt('Mời bạn đoán số'));

	if (number === numberRandom) {
		alert('Đoán đúng');
		break;
	} else {
		alert('Đoán sai');

		if (count === 5) {
			alert('Bạn đã hết lượt chơi');
			break;
		}
	}

	count++;
}
