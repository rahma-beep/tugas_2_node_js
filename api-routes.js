const express = require("express");
const router = express.Router();

const siswaController = require("./siswaController");

router.route("/siswa").get(siswaController.index).post(siswaController.new);


module.exports = router