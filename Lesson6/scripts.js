// alert('Hello world!');

// Khai báo 1 biến trong javascript;
// const/var/let name_variable = init_value
// Trong đó: name_variable: tên biến
//  init-value: giá trị khởi tạo cho biến đó

// const PI = 3.14;
// let course = "javascript";
// var name = "T3H";

// var number;
// let age;

// let gender1, gender2 = "girl", gender3;

// let level = 1;
// level = 2;

// let/var và const
// Từ khóa let, var dùng để khởi tạo những biến mà có thể thay đổi giá trị
// var name = 'Trần Thị A';
// console.log(name);
// name = 'Nguyễn Văn C';
// console.log(name);
// Từ khóa const (constant) dùng để khởi tạo những biến hằng số (không thay đổi giá trị)
// const PI = 3.14;
// console.log(PI);
// PI = 10;
// console.log(PI);
// Từ khóa let, var có thể khởi tạo biến mà không cần gán giá trị khởi tạo
// Từ khóa const khi khởi tạo 1 biến phải gán luôn giá trị khởi tạo

// let/const và var

// hoisting

// let my_name = 'Dũng'

// let x = 10;
// let y = 20;
// let z = '30';

// let res1 = x + y;
// let res2 = y + z;

// console.log('res1: ', res1);
// console.log('res2: ', res2);

// Kiểu dữ liệu
// Number
// let number1 = 1000;
// let number2 = 2000;
// const result = number1 + number2;
// console.log(result);

// String
// let name = "T3H HTM";
// console.log(name);
// Boolean
// const isBoy = true;
// Null
// const PI = null;
// Undefined
// let age;

// Operator Number
// let a = 10;
// let b = 3;
// console.log('Phép cộng: a+b: ', a + b);
// console.log('Phép trừ: a-b: ', a - b);
// console.log('Phép nhân: a*b: ', a * b);
// console.log('Phép chia: a/b: ', a / b);
// console.log('Phép chia lấy phần dư: ', a % b);
// console.log('a mũ b: ', a**b);

// Operator string
// let firstName = 'Nguyễn Văn';
// let lastName = 'ABC';
// let fullName = firstName + ' ' + lastName;

// console.log(fullName);

// Toán tử so sánh
// let a = 10;
// let b = 20;
// let c = 30;
// let d = '10';

// console.log(a !== d);//

// Toán tử logic
// let a = 10;
// let b = '10';
// let c = 20;
// console.log(a == b || b == c);
// => true && false => false
// => true || false => true

console.log(!(10 === 10));

// x = true, y = true, z = false

// x && y && z → ?
// x && y && !z → ?
// (x && y) || z → ?
// (x && y) || !z → ?
// x && (y || z) → ?
// x && !(y || z) → ?
// x && (y || !z) → ?
// x && (!y || z) → ?
