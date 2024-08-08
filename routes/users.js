const express = require("express");
const { getUsers, editUserDetail, getUserDetailById, deleteUser } = require("../controller/users");

const router = express.Router();

router.get("/", getUsers);

router.get("/:id", getUserDetailById);

router.patch("/:id", editUserDetail);

router.delete("/:id", deleteUser);

module.exports = router;