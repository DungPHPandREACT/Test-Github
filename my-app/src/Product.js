const Product = (props) => {
	const { title, isShowTagSale, isShowRate, textButton, price1, price2, type } =
		props;

	const renderPrice = () => {
		if (type === 'type1') {
			return (
				<>
					${price1} - ${price2}
				</>
			);
		} else if (type === 'type2') {
			return (
				<>
					<span className='text-muted text-decoration-line-through'>
						${price1}
					</span>
					${price2}
				</>
			);
		} else {
			return <>${price1}</>;
		}
	};

	return (
		<div className='col mb-5'>
			<div className='card h-100'>
				{/* Sale badge*/}
				{isShowTagSale ? (
					<div
						className='badge bg-dark text-white position-absolute'
						style={{ top: '0.5rem', right: '0.5rem' }}
					>
						Sale
					</div>
				) : (
					''
				)}
				{/* Product image*/}
				<img
					className='card-img-top'
					src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg'
					alt='...'
				/>
				{/* Product details*/}
				<div className='card-body p-4'>
					<div className='text-center'>
						{/* Product name*/}
						<h5 className='fw-bolder'>{title}</h5>
						{/* Product reviews*/}
						{isShowRate ? (
							<div className='d-flex justify-content-center small text-warning mb-2'>
								<div className='bi-star-fill' />
								<div className='bi-star-fill' />
								<div className='bi-star-fill' />
								<div className='bi-star-fill' />
								<div className='bi-star-fill' />
							</div>
						) : (
							''
						)}
						{/* Product price*/}
						{renderPrice()}
					</div>
				</div>
				{/* Product actions*/}
				<div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
					<div className='text-center'>
						<a className='btn btn-outline-dark mt-auto' href='#'>
							{textButton}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
