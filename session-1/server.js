const http = require('http');

const routes = {
	'/hello': {
		type: 'application/json',
		content: {
			message: 'hi there',
		},
	},
};

function createServer() {
  return http.createServer((req, res) => {
    const response = routes[req.url];
    if (!response) {
      res.end('invalid request');
      return;
    }

    res.writeHead(200, { 'Content-Type': response.type });
    res.write(JSON.stringify(response.content));
    res.end();
  });
}

const server = createServer();
server.listen(8080, '', '', () => {
  console.log('server is listening on port 8080');
});
