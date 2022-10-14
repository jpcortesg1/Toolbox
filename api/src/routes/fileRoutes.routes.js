// Required modules
const router = require("express").Router();

// Middleware
// const { isValidQuery } = require("./../middlewares/queries.middleware.js");

// Controller
const { getData, getFiles } = require("../controllers/files.controller");

// Files data
router.get("/files/data", getData);

// File list
router.get("/files/list", getFiles);

module.exports = router;
