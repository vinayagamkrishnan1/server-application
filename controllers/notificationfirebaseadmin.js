const firebaseAdmin = require("firebase-admin");
const serviceAccount = require("../securefiles/ble-sample-app-firebase-adminsdk.json");

firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount)
});

const sendNotification = async(req, res) => {
    try {
        const msg = {
            notification: {
                body: "This is an FCM notification that displays an image!",
                title: "FCM Notification",
            },
            tokens: [
                "f8fR58EcR5OKGeHkMXAYoX:APA91bGZISlJeVZC0eA5GpUmYBDNtudoHC-460F6nkFL2wlwq4b7OoEGFnwo97AZFkIstoKUma7FRettTRKjPolnQ7xGyLXvhBR8dOh8Nt89DUuyg2aOQc0QYTA7RlI4LQjXmeSm0xrR",
                "cIFioSgNQwSdByVWp8e42R:APA91bG27YZAJ7Dg6yhYjmUWFnGUc0Xhm_H_PJ7wMO-yndoneHbDbs9Tz4KJbIgAIZhWn3NaXHoYCWTRSXEf5YIzhfarBWUfTwiDckg6uC88Hn4_ImY4-tSGjYHLdXxh1vA2ac0wcF2C"
            ],
            android: {
              priority: "high"
            }
        };
        firebaseAdmin.messaging().sendEachForMulticast(msg)
        .then(response => {
            console.log("Successfully sent message:", response);
            res.send(response);
        })
        .catch(error => {
            console.log("ERROR while firebase admin", error);
            res.send(error);
        });
    } catch (error) {
        res.json({error: error});
    }
}

module.exports = {
    sendNotification
}