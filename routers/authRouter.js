const express = require("express");
const router = express.Router();
const validateForm = require("../controllers/validateForm");

router.post("/register", (req, res) => {
  validateForm(req, res);
});

router.post("/login", (req, res) => {
  validateForm(req, res);
});

module.exports = router;
