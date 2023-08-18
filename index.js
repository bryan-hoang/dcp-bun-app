const { init } = require('dcp-client');

const { compute } = await init();

const job = compute.for([1, 2, 3, 4], (input) => {
	progress();
	return input ** 2;
});

const results = await job.exec();

console.log(results);