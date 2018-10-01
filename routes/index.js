var express = require("express");
var router = express.Router();
let reloadMarkup =
	process.env.NODE_ENV !== "production"
		? '<script src="reload/reload.js/"></script>'
		: "";

/* GET home page. */
router.get("/", function(req, res) {
	console.log("GET /");
	res.render("index", {
		title: "Saurabh Sharma",
		date: new Date().getFullYear(),
		reload: reloadMarkup
	});
});

router.get("/saurabh-sharma", function(req, res) {
	console.log("GET /saurabh-sharma");
	res.render("index", {
		title: "Saurabh Sharma",
		date: new Date().getFullYear(),
		reload: reloadMarkup
	});
});

module.exports = router;
