function handle(err, req, res, next) {
  if (!err) {
    next();
  }

  const errMsg = err.message || err.toString();

  console.log(`Something went wrong: ${errMsg}`, err);
  res.status(err.status || 500).send({
    message: errMsg || 'Something went wrong',
  });
}

module.exports = {
  handle,
};
