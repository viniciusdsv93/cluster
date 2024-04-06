const http = require("http");

const PORT = 3000;

const server = http.createServer();

server.listen(PORT, () => {
	console.log(`Worker pid ${process.pid} listening on port ${PORT}`);
});

process.on("SIGTERM", () => {
	console.log(`Worker pid ${process.pid} died... closing server`);
	server.close(() => {
		process.exit(1);
	});
});
