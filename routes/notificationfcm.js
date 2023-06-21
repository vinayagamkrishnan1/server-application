var express = require("express");
var router = express.Router();
const notificationController = require("../controllers/notificationfcm");

const sendNotification = async(req, res) => {
    notificationController.sendNotification(req, res);
}

router.post('/send', sendNotification);

module.exports = router;
