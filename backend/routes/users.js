var express = require('express');
const { PostFormData } = require('../Controllers/Form');
var router = express.Router();

// router.post("/api/formData", PostFormData)
router.route("/api/formData").post(PostFormData)

module.exports = router;
