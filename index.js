const express = require("express");
var minify = require("express-minify");
var compression = require("compression");
var path = require("path");

//routes import

var index = require("./routes/index");

//app init

const app = express();

// view engine setup

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

//compression

if (process.env.NODE_ENV === "production") {
	app.use(compression());
	app.use(minify());
	app.use(
		express.static(path.join(__dirname, "public"), { maxAge: 2592000000 })
	);
}
//serve html and css and js
else {
	var reload = require("reload");
	reload(app);
	app.use(express.static(path.join(__dirname, "public")));
}
// routing

app.use("/", index);

// catch 404 and forward to error handler

app.use(function(req, res, next) {
	res.render("error");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log("server is running at", port);
});
