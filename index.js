const cluster = require("cluster");
const os = require("os");

const processes = os.cpus().length;

const runPrimaryProcess = () => {
	console.log(`Primary pid ${process.pid}`);

	for (let i = 0; i < processes; i++) {
		cluster.fork();
	}

	cluster.on("exit", (worker, code, signal) => {
		cluster.fork();
	});
};

const runWorkerProcess = async () => {
	await require("./server.js");
};

cluster.isPrimary ? runPrimaryProcess() : runWorkerProcess();
