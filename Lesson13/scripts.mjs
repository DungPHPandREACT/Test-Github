import dataStudents, {
	renderStudents,
	createStudent,
	searchStudent,
	pageCurrent,
	PAGE_SIZE,
} from './features.mjs';

document
	.getElementById('create-student')
	.addEventListener('click', createStudent);

// Cách 1: sử dụng onclick cho button search
// document
// 	.getElementById('search-student')
// 	.addEventListener('click', searchStudent);

// Cách 2: sử dụng oninput cho input nhập keyword
document.getElementById('keyword').oninput = searchStudent;

const dataPagination = dataStudents.slice(
	(pageCurrent - 1) * PAGE_SIZE,
	pageCurrent * PAGE_SIZE
);

renderStudents(dataPagination);
