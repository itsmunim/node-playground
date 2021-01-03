const http = require('http');

const routes = {
	'/hello': {
		type: 'application/json',
		content: {
			message: 'hi there',
		},
	},
};

function createServer(pid) {
  return http.createServer((req, res) => {
    const response = routes[req.url];
    if (!response) {
      res.end('invalid request');
      return;
    }

    console.log(`Serving from process id: ${pid}`);
    res.writeHead(200, { 'Content-Type': response.type });
    res.write(JSON.stringify(response.content));
    res.end();
  });
}

function runServer(port, pid) {
  const server = createServer(pid);
  server.listen(port || 8080, '', '', () => {
    console.log(`Server is listening on port ${port}`, `process id: ${pid}`);
  });
}

module.exports = {
  runServer,
};
