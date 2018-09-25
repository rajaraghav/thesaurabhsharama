var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
	res.render("index", {
		title: "Saurabh Sharma",
		date: new Date().getFullYear()
	});
});

router.get("/saurabh-sharma", function(req, res, next) {
	res.render("index", {
		title: "Saurabh Sharma",
		date: new Date().getFullYear()
	});
});

module.exports = router;
