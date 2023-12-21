import React from 'react';

const ProductItem = (props) => {
	const message1 = <h1>Sản phẩm này có nhãn dán</h1>;
	const message2 = <h1>Sản phẩm này không có nhãn dãn</h1>;

	return <div>{props.isExistTag ? message1 : message2}</div>;
};

export default ProductItem;
