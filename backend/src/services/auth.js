const argon2 = require("argon2");
const uid2 = require("uid2");

const hashPassword = async (req, res, next) => {
  try {
    const { password } = req.body;
    const hashingOptions = {
      memoryCost: 2 ** 16,
      timeCost: 3,
      parallelism: 1,
    };
    const salt = uid2(16);
    const password_hash = await argon2.hash(password + salt, hashingOptions);
    req.body.password_hash = password_hash;
    req.body.salt = salt;
    delete req.body.password;

    next();
  } catch (err) {
    console.error(err);
    res.status(500).send({
      error: "Il y a eu un problème dans la validation du mot de passe",
    });
  }
};

module.exports = { hashPassword };