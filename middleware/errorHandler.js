module.exports = (err, req, res, next) => {
  return res.status(err.status || 500).json({
    status: 'Error',
    message: 'Action failed'
  });
};
