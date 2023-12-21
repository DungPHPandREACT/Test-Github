// Selector theo id
// console.log(document.getElementById('h1'));
// Trả về 1 phần tử đầu tiên mà nó tìm thấy

// Selector theo tên class
// console.log(document.getElementsByClassName('h1'));

// Seletor theo tên thẻ
// console.log(document.getElementsByTagName('h1'));

// Truy xuất nội dung
const $h1 = document.getElementById('h1');

// console.log($h1.innerHTML);
// console.log($h1.innerText);

// Thay đổi nội dung
// $h1.innerText = '<p style="font-size:20px">Hello world!</p>'
// $h1.innerHTML = "<p style='font-size:20px'>Hello world!</p>";

// Get attribute
// const $tagA = document.getElementById('tagA');
// console.log($tagA.getAttribute('href'));
// console.log($tagA.href);

// Set attribute
// $tagA.href = 'https://youtube.com';
// $tagA.setAttribute('href', 'https://youtube.com');
// $tagA.setAttribute('target', '_blank');

// $h1.style.color = 'red';
// $h1.style.fontSize = '60px';
// $h1.style.display = 'none';

// $h1.classList.add('test')
// $h1.classList.remove('test')
// $h1.classList.toggle('test');

// // Tạo thẻ mới
// const $div = document.createElement('div');
// $div.innerHTML = 'Test tạo thẻ';
// document.body.appendChild($div);

// // Xóa thẻ
// $h1.remove();

const $tagsLi = document.getElementsByClassName('favorite-list-item');
// $tagsLi[0].innerHTML = 'I love this thing';
// $tagsLi[1].innerHTML = 'I love this thing';
// $tagsLi[2].innerHTML = 'I love this thing';

// for (let i = 0; i < $tagsLi.length; i++) {
// 	$tagsLi[i].innerHTML = 'I love this thing';
// 	$tagsLi[i].style.color = 'red';
// }

// const text = prompt('Mời bạn nhập nội dung');
// const $newTagLi = document.createElement('li');
// $newTagLi.innerText = text;
// document.getElementById('favorite-list').appendChild($newTagLi);

function notify() {
	alert('Xin chào thế giới');
}

// document.getElementById('btn-hello').onclick = notify;

// document.getElementById('btn-hello').onclick = function () {
// 	alert('Hello world!');
// };

document.getElementById('btn-hello').addEventListener('click', notify);
document.getElementById('btn-hello').addEventListener('click', function () {
	alert('Hello world!');
});
