import PropTypes from 'prop-types';

const CardStudent = (props) => {
	const { name = 'Trần Văn A', age = 15 } = props;
	console.log('giá trị children: ', props.children);
	return (
		<div className='card'>
			<h1
				style={{
					color: 'red',
					fontSize: '14px',
				}}
			>
				Username: {name}
			</h1>
			{props.children}
			<h1>Age: {age}</h1>
		</div>
	);
};
// // Cách 1:
// // Khởi tạo kiểu dữ liệu cho props
// CardStudent.propTypes = {
// 	name: PropTypes.string.isRequired,
// 	age: PropTypes.number,
// };
// // Khởi tạo giá trị default cho props
// CardStudent.defaultProps = {
// 	name: 'Trần Văn A',
// 	age: 15,
// };

export default CardStudent;
