const Joi = require("joi");
const jwt = require("jsonwebtoken");

const checkIds = (req, res, next) => {
  const { error } = Joi.object({
    email: Joi.string().email().presence("required"),
    password: Joi.string().min(2).presence("required"),
  }).validate(req.body, { abortEarly: false });

  if (!error) {
    next();
  } else {
    res.status(400).json(error);
  }
};

const verifyToken = (req, res, next) => {
  try {
    const authorizationHeader = req.get("Authorization");

    if (authorizationHeader == null) {
      throw new Error("Authorization header is missing");
    }

    const [type, token] = authorizationHeader.split(" ");

    if (type !== "Bearer") {
      throw new Error("Authorization header has not the 'Bearer' type");
    }

    req.payload = jwt.verify(token, process.env.JWT_SECRET);

    next();
  } catch (err) {
    console.error(err);
    res.sendStatus(401);
  }
};

const verifyCookie = (req, res, next) => {
  if (req.cookies) {
    jwt.verify(req.cookies.token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        res.status(401).json({
          msg: "Sorry, you must be authenticated to access this resource.",
        });
      } else {
        req.token = decode;
        next();
      }
    });
  } else {
    res.status(401).json({ msg: "Sorry, wrong credits" });
  }
};

module.exports = { checkIds, verifyToken, verifyCookie };