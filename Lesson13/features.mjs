const dataStudents =
	localStorage.getItem('dataStudents') !== null
		? JSON.parse(localStorage.getItem('dataStudents'))
		: [];

// condition ? code_true : code_else
// if(condition){
//     code_true
// } else{
//     code_else
// }

export let pageCurrent = 1;
export const PAGE_SIZE = 10;

const calAverageScore = (math_score, english_score, literature_score) => {
	return (
		(Number(math_score) + Number(english_score) + Number(literature_score)) / 3
	);
};

// Hàm in ra html phần pagination
const renderPagination = () => {
	let htmlPagination = '';
	console.log(Math.ceil(dataStudents.length / PAGE_SIZE));

	for (let i = 1; i <= Math.ceil(dataStudents.length / PAGE_SIZE); i++) {
		htmlPagination += `<li class="page-item ${
			pageCurrent == i ? 'active' : ''
		}" onclick="handleClickPagination(${i})"><a class="page-link" href="#">${i}</a></li>`;
	}

	return htmlPagination;
};

export function renderStudents(listStudent) {
	let rowsHTML = '';
	for (let student of listStudent) {
		rowsHTML += `
        <tr>
            <th scope="row">${student.id}</th>
            <td>${student.name}</td>
            <td>${student.gender}</td>
            <td>${student.math_score}</td>
            <td>${student.english_score}</td>
            <td>${student.literature_score}</td>
            <td>${calAverageScore(
							student.math_score,
							student.english_score,
							student.literature_score
						)}</td>
            <td>
                <button type="button" class="btn btn-success ml-2 mr-2" onClick='updateStudent(${
									student.id
								})'>Update</button>
                <button class="btn btn-danger" style="margin: 0 4px" onclick='deleteStudent(${
									student.id
								})'>
                    Delete
                </button>
            </td>
        </tr>`;
	}
	document.getElementById('show-student').innerHTML = rowsHTML;

	document.getElementById('pagination').innerHTML = `
	<nav aria-label="...">
		<ul class="pagination">
			<li class="page-item" onclick="handleClickPagination('prev')">
				<a class="page-link ${pageCurrent === 1 ? 'disabled' : ''}">Previous</a>
			</li>
			${renderPagination(listStudent)}
			<li class="page-item" onclick="handleClickPagination('next')">
				<a class="page-link ${
					pageCurrent === Math.ceil(dataStudents.length / PAGE_SIZE)
						? 'disabled'
						: ''
				}" href="#">Next</a>
			</li>
		</ul>
	</nav>
	`;
}

// Pagination
// Hàm xử lý logic pagination
const handleClickPagination = (page) => {
	// Bước 1: lấy được giá trị trang mà người dùng muốn hiển thị thông tin
	console.log(page);
	// Bước 2: gán giá trị page hiện tại cho biến pageCurrent
	if (page === 'prev') {
		pageCurrent = pageCurrent - 1;
	} else if (page === 'next') {
		pageCurrent = pageCurrent + 1;
	} else {
		pageCurrent = page;
	}
	// Bước 3: xử lý dữ liệu hiển thị
	const dataPagination = dataStudents.slice(
		(pageCurrent - 1) * PAGE_SIZE,
		pageCurrent * PAGE_SIZE
	);
	// Bước 4: gọi lại hàm renderStudents để in ra thông tin dữ liệu của trang hiện tại
	renderStudents(dataPagination);
};

// Create
export const createStudent = () => {
	// Bước 1: gán sự kiện onclick cho button "Create student"
	// Bước 2: lấy được toàn bộ giá trị người dùng đã nhập ở các ô input
	const id = document.getElementById('id').value;
	const name = document.getElementById('name').value;
	const gender = document.getElementById('gender').value;
	const math_score = document.getElementById('math_score').value;
	const english_score = document.getElementById('english_score').value;
	const literature_score = document.getElementById('literature_score').value;
	// Bước 3: tạo 1 object student mới
	const newStudent = {
		id,
		name,
		gender,
		math_score,
		english_score,
		literature_score,
	};
	// Bước 4: thêm object vừa tạo vào trong mảng
	dataStudents.push(newStudent);
	// Bước 5: gọi lại hàm renderStudents để in ra dữ liệu mới nhất
	console.log(dataStudents);
	renderStudents(dataStudents);
	// Bước 6: clear input
	clearInput();
	// Bước 7: set data vào trong local storage
	localStorage.setItem('dataStudents', JSON.stringify(dataStudents));
};

const findIndexById = (id) => {
	let index = -1;

	for (let i = 0; i < dataStudents.length; i++) {
		if (dataStudents[i].id == id) {
			index = i;
		}
	}

	return index;
};

// Delete
const deleteStudent = (id) => {
	// Bước 1: gán sự kiện onclick cho button delete
	// Bước 2: xác định được id của học sinh cần xóa
	// Bước 3: tìm index của học sinh thông qua id
	const index = findIndexById(id);
	// Bước 3: xóa học sinh đó khỏi danh sách (xóa object khỏi mảng)
	dataStudents.splice(index, 1);
	// Bước 4: gọi lại hàm renderStudents để in ra dữ liệu mới nhất
	renderStudents(dataStudents);
	// Bước 5: set data vào trong local storage
	localStorage.setItem('dataStudents', JSON.stringify(dataStudents));
};

const updateStudent = (id) => {
	// Bước 1: sau khi lấy được id => tìm index
	const index = findIndexById(id);
	// Bước 2: in thông tin của học sinh ở vị trí index vừa tìm được lên các thẻ input tương ứng
	clearInput(dataStudents[index]);
	// Bước 3: show button update
	document.getElementById('update-student').style.display = 'inline';
	// Bước 4: hide button create
	document.getElementById('create-student').style.display = 'none';
	// Bước 5: disable input id => không cho sửa id
	document.getElementById('id').disabled = true;
};

document.getElementById('update-student').onclick = function () {
	// Bước 1: get value người dùng đã chỉnh sửa ở input
	const id = document.getElementById('id').value;
	const name = document.getElementById('name').value;
	const gender = document.getElementById('gender').value;
	const math_score = document.getElementById('math_score').value;
	const english_score = document.getElementById('english_score').value;
	const literature_score = document.getElementById('literature_score').value;

	// Bước 2: tạo 1 object mới dựa trên các thông tin người dùng vừa chỉnh sửa
	const studentUpdate = {
		id,
		name,
		gender,
		math_score,
		english_score,
		literature_score,
	};

	// Bước 3: Tìm index của học sinh đó trong mảng
	const index = findIndexById(id);

	// Bước 4: Update phần tử ở vị trí thứ index = thông tin mới
	dataStudents[index] = studentUpdate;
	renderStudents(dataStudents);

	// Bước 5: clear input
	clearInput();
	// Bước 6: hide button update
	document.getElementById('update-student').style.display = 'none';
	// Bước 7: show button create
	document.getElementById('create-student').style.display = 'inline';
	// Bước 8: enabled input id => cho sửa id
	document.getElementById('id').disabled = false;
	// Bước 9: set data vào trong local storage
	localStorage.setItem('dataStudents', JSON.stringify(dataStudents));
};

// Search
export const searchStudent = () => {
	// Bước 1: lấy được keyword người dùng nhập trong input
	const keyword = document.getElementById('keyword').value;
	// Bước 2: sử dụng hàm filter để lọc ra những kết quả có chứa keyword đó
	const studentsSearch = dataStudents.filter((student) => {
		return student.name.toLowerCase().includes(keyword.toLowerCase());
	});
	// Bước 3: gọi lại hàm renderStudents và truyền vào hàm dữ liệu vừa tìm được
	renderStudents(studentsSearch);
};

// clear input
const clearInput = (student = {}) => {
	const {
		id = '',
		name = '',
		gender = '',
		math_score = '',
		english_score = '',
		literature_score = '',
	} = student;

	document.getElementById('id').value = id;
	document.getElementById('name').value = name;
	document.getElementById('gender').value = gender;
	document.getElementById('math_score').value = math_score;
	document.getElementById('english_score').value = english_score;
	document.getElementById('literature_score').value = literature_score;
};

window.updateStudent = updateStudent;
window.deleteStudent = deleteStudent;
window.handleClickPagination = handleClickPagination;

export default dataStudents;
