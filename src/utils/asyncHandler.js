const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next))
      .then((result) => {
        if (typeof result !== "undefined") {
          res.send(result); 
        } else {
          next();
        }
      })
      .catch((err) => next(err));
  };
};

export { asyncHandler };
