function includeDatabase(database) {
  return (req, res, next) => {
    req.db = database;
    next();
  };
}

module.exports = {
  includeDatabase,
};
