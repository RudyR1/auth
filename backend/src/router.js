const express = require("express");

const router = express.Router();

const authControllers = require("./controllers/authControllers");
const usersControllers = require("./controllers/usersControllers");

const { hashPassword } = require("./services/auth");
const { checkIds, verifyCookie, logout } = require("./middlewares/auth");

router.get("/users", usersControllers.browse);
router.put("/users/:id", hashPassword, usersControllers.edit);
router.post("/signup", checkIds, hashPassword, usersControllers.add);

//Login & Logout User route

router.post("/login", checkIds, authControllers.login);
router.post("/logout", logout);


module.exports = router;