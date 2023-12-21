// setTimeout(() => {
// 	console.log(1);
// }, 4000);

// setTimeout(() => {
// 	console.log(2);
// }, 3000);

// setTimeout(() => {
// 	console.log(3);
// }, 2000);

// setTimeout(() => {
// 	console.log(4);
// }, 1000);

// setTimeout(() => {
// 	console.log(5);
// }, 0);

// function logTime(time) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			if (time) {
// 				resolve('Success');
// 			} else {
// 				reject('Error');
// 			}
// 			console.log(time);
// 		}, time);
// 	});
// }

// setTimeout(() => {
// 	console.log('setTimeout', 3000);
// 	setTimeout(() => {
// 		console.log('setTimeout', 2000);
// 		setTimeout(() => {
// 			console.log('setTimeout', 1000);
// 			console.log(1);
// 		}, 1000);
// 	}, 2000);
// }, 3000);

// logTime(5000)
// 	.then((status) => {
// 		console.log(status);
// 		return logTime(4000);
// 	})
// 	.then((status) => {
// 		console.log(status);
// 		return logTime();
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

// const runLogTime = async () => {
// 	const status1 = await logTime(2000);
// 	console.log(status1);
// 	const status2 = await logTime(1000);
// 	console.log(status2);
//     const status3 = await logTime(1000);
// 	console.log(status3);
// };

// runLogTime();
