const empErrorHandler = (err, req, res, next) => {
  // handle only employee errors
  if (!err.isEmpError) {
    return next(err);
  }

  res.status(err.statusCode || 500).json({
    success: false,
    module: "employee",
    message: err.message,
  });
};

export default empErrorHandler;
