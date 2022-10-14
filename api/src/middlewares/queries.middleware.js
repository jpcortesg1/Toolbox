// Middleware to know if query fileName is valid
const isValidQuery = (req, res, next) => {
  const { fileName } = req.query;
  if (fileName) {
    if (typeof fileName === "string") {
      if (fileName.includes(".csv")) {
        return next();
      }
    }
  }
  next();
};

module.exports = {
  isValidQuery,
};
