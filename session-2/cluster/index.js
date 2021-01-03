var cluster = require('cluster');
const os = require('os');
const { runServer } = require('../../session-1/server');
const cpuCount = os.cpus().length;

if (cluster.isMaster) {
  for (let i = 0; i < cpuCount; i++) {
    cluster.fork();
  }
} else {
  runServer(9000, process.pid);
}
