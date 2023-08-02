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

const logout = (req, res) => {

    
}

module.exports = { checkIds, verifyCookie };