// setTimeout(function () {
// 	setTimeout(function () {
// 		setTimeout(function () {
// 			setTimeout(function () {
// 				console.log(1);
// 			}, 4000);
// 			console.log(2);
// 		}, 3000);
// 		console.log(3);
// 	}, 2000);
// 	console.log(4);
// }, 1000);

// In ra màn hình 1 2 3 4

// Dùng callback

// const testPromise = (number) =>
// 	new Promise(function (resolve, reject) {
// 		if (number > 5) {
// 			resolve('oke chạy thành công');
// 		} else {
// 			reject('không oke, chạy đã thất bại');
// 		}
// 	});

// testPromise(4)
// 	.then((message) => {
// 		console.log(message);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

const promiseTimeOut = (time) => {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			if (time < 1000) {
				reject('Thời gian bé quá');
			} else {
				resolve(time);
			}
		}, time);
	});
};

// promiseTimeOut(4000)
// 	.then((time) => {
// 		console.log('time: ', time);
// 		return promiseTimeOut(3000);
// 	})
// 	.then((time) => {
// 		console.log('time: ', time);
// 		return promiseTimeOut(0);
// 	})
// 	.then((time) => {
// 		console.log('time: ', time);
// 		return promiseTimeOut(1000);
// 	})
// 	.then((time) => {
// 		console.log('time: ', time);
// 	})
//     .then((time) => {
// 		console.log('time: ', time);
// 		return promiseTimeOut(3000);
// 	})
//     .then((time) => {
// 		console.log('time: ', time);
// 		return promiseTimeOut(3000);
// 	})
//     .then((time) => {
// 		console.log('time: ', time);
// 		return promiseTimeOut(3000);
// 	})
// 	.catch((err) => {
// 		console.log('error: ', err);
// 	});

// async function testAsyncAwait() {
// 	const time1 = await promiseTimeOut(4000);
// 	console.log(time1); //
// 	const time2 = await promiseTimeOut(3000);
// 	console.log(time2); //
// 	const time3 = await promiseTimeOut(2000);
// 	console.log(time3); //
// 	const time4 = await promiseTimeOut(1000);
// 	console.log(time4); //
// }

// const testAsyncAwait = async () => {
// 	try {
// 		const time1 = await promiseTimeOut(2000);
// 		console.log(time1); //
// 	} catch (e) {
// 		console.log(e);
// 	}
// };

// testAsyncAwait();

// let x = 10;
// const z = 30;
// console.log(x); // 10
// x = 100;
// console.log(x); // 100
// try {
// 	z = 300;
// } catch (e) {
// 	console.log(e);
// }

// console.log(x);

// fetch('https://657b050a394ca9e4af13651c.mockapi.io/api/v1/students')
// 	.then((response) => {
// 		console.log(response);

// 		return response.json();
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

// const getData = async () => {
// 	const response = await fetch(
// 		'link_api',
// 		{
// 			method: 'GET',
// 		}
// 	);
// 	const data = await response.json();
// 	console.log('response: ', data);
// };

// getData();
