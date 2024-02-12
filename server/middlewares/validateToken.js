const jwt = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const authorization = req?.headers?.authorization;

  if (!authorization) {
    return res.status(401).send("Unauthorized user");
  }

  if (!authorization.startsWith("Bearer ")) {
    return res.status(401).send("Invalid token");
  }

  const token = authorization.split(" ")[1];
  const decoded = jwt.verify(token, process.env.SECRET);

  if (!decoded) {
    return res.status(401).send("Unauthorized user");
  }

  req.token = token;
  req.user = decoded;
  next();
};
module.exports = validateToken;
