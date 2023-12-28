import React, { useState } from 'react';

// Ở trạng thái mặc định
// => form nhập tên => bị ẩn đi
// khi click vào button 'Thêm tên mới
// => form nhập tên sẽ show ra

// Sau khi nhập tên vào input và click button thêm
// thì tên mới sẽ được hiển thị lên màn hình
const Example = () => {
	const [isShowForm, setIsShowForm] = useState(false);
	const [name, setName] = useState('');
	const [listName, setListName] = useState(['Huy', 'Khánh']);

	const handleChangeStatusForm = () => {
		setIsShowForm(!isShowForm);
	};

	const handleGetName = (event) => {
		setName(event.target.value);
	};

	const handleAddName = () => {
		setListName([...listName, name]);
		setName('');
	};

	return (
		<div>
			<div>
				<button onClick={handleChangeStatusForm}>Thêm tên mới</button>
			</div>

			{isShowForm ? (
				<div>
					<input
						value={name}
						placeholder='Nhập tên: '
						onChange={handleGetName}
					/>
					<button onClick={handleAddName}>Thêm</button>
				</div>
			) : (
				''
			)}

			<div>
				<ul>
					{listName.map((name, index) => (
						<li>{name}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Example;
