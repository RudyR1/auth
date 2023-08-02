const express = require("express");

const router = express.Router();

const authControllers = require("./controllers/authControllers");
const usersControllers = require("./controllers/usersControllers");

const { hashPassword } = require("./services/auth");
const { checkIds, verifyCookie } = require("./middlewares/auth");

router.get("/users", usersControllers.browse);
router.get("/users/:id", verifyCookie, usersControllers.read);
router.put("/users/:id", hashPassword, usersControllers.edit);
router.post("/signup", hashPassword, usersControllers.add);
router.post("/login", checkIds, authControllers.login);

module.exports = router;