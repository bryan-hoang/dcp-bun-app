const { init } = require('dcp-client');

async function main({ compute }) {
	const job = compute.for([1, 2, 3, 4], (input) => {
		progress();
		return input ** 2;
	});

	job.on('readystatechange', console.log);

	const results = await job.exec();
	console.log(results);
}

init().then(main);