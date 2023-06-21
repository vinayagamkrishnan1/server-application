var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var usersRouter = require("./routes/users");
var fcmNotificationRouter = require("./routes/notificationfcm");
var firebaseNotificationRouter = require("./routes/notificationfirebaseadmin");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/user/api", usersRouter);
app.use('/notification/fcm', fcmNotificationRouter);
app.use('/notification/firebaseadmin', firebaseNotificationRouter);


module.exports = app;
