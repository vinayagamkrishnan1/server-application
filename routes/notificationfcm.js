var express = require("express");
var router = express.Router();
const notificationController = require("../controllers/notificationfcm");

const sendNotification = async(request, response) => {
    notificationController.sendNotification(request, response);
}

router.post('/send', sendNotification);

module.exports = router;
