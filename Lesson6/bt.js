// 1. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây?  Giải thích vì sao có kết quả đó?
// x = true, y = true, z = false

// x && y && z → false
// x && y && !z → true && true && true → true
// (x && y) || z → true || false → true
// (x && y) || !z → true || true → true
// x && (y || z) → true && true → true
// x && !(y || z) → true && !true → false
// x && (y || !z) → true && true → true
// x && (!y || z) → true && false → false

// 2. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây?  Giải thích vì sao có kết quả đó?
// name = 'AAA', age = 20, isGood = true

// age + 10 = 30
// age % 3 = 2
// name + ' BBB' = 'AAA BBB'
// !isGood = false
// name == 'aaa' && age >= 20 → 'AAA' == 'aaa' && 20 >= 20 → false && true → false
// name != 'aaa' && isGood → true
// !(age < 10) && !isGood → false

// 3. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây?  Giải thích vì sao có kết quả đó?
// a = 10, b = 20, c = 30, d = '40'
// a + b + c = 10 + 20 + 30 = 60
// a - b / c = 10 - 20 / 30 = 10 - 0,66667 = 9,3333
// a - (b * c) = 10 - (20 * 30) = -590
// d - (a * b) - c = '40' - (10*20) - 30 = -190
// a + b + c + d = 10 + 20 + 30 + '40' = '6040'
// d + a + b + c = '40' + 10 + 20 + 30 = '40102030'
// d + a - b + c = '40' + 10 - 20 + 30 = 4020
// a - b + d - c = 10 - 20 + '40' - 30 = -1070
// d - c + a - b = '40' - 30 + 10 - 20 = 0
// a * b + d * c = 10 * 20 + '40' * 30 = 1400

// 4. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây? Giải thích vì sao có kết quả đó?
// x = true, y = false, z = 10

// x && y → ?
// x && !y → ?
// x && z == 10 → ?
// (x && z == 10) → ?
// !(x && z == 10) → ?
// !(x && z == 50) → ?
// x && y && z == 10 → ?
// x && !y && z == 10 → ?
// x || y || z == 10 → ?
// (x && y) || z != 10 → ?
// !(x && z == 10) || y → ?

// 5. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây? Giải thích vì sao có kết quả đó?
// a = 1, b = '2', c = 3, d = '4'

// b + d = ? 
// a + b + c + d = ? 
// a - b + c - d = ? 
// a - b - c + d = ? 
// (b + d) - (a + c) = ? 
// (a + b) - (c + d) = ? 
// a * c + b * d = ?
// -b + d = ? 
// -b - d = ? 
// -(b + d) = ? 

// 6. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây? Giải thích vì sao có kết quả đó?
// age = 25, isMarried = false, isRich = true

// age > 25 && isMarried && isRich → ?
// (age <= 25 || isMarried) && isRich → ?
// (age > 10 || isRich) && isMarried → ?
// !(age >= 15 && isMarried) && isRich → ?
// !(age <= 20) || !(isMarried && isRich) → ?
// (age > 8 && !isMarried) || isRich → ?
// !(age < 8 && !isMarried) || isRich → ?
// (age == 8 && isMarried) || !isRich → ?

// 7 Hãy cho biết kết quả phép toán và biểu thức
// a = 5, b = 10, c =15
// a + b = ?
// a - c = ?
// a + b + c = ?
// a + c + b = ?
// (a + b) % 3 = ?

// a * b > 50 → ?
// a ** b > 100 → ?
// a - (b++) == 5 → ?
// a - (++b) == 5 → ?

// 8. Cho các biến sau: 
// isTall = true, isMuscle = false, isHandsome = true
// Hãy cho biết kết quả của các biểu thức sau:
// isTall && isMuscle → ?
// !isHandsome → ?
// !isTall || !isMuscle → ?
// isTall || !(isMuscle && isHandsome) → ?
// isMuscle && !(isTall || isHandsome) → ?
