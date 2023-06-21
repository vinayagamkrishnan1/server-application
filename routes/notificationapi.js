var express = require("express");
var router = express.Router();
const FCM = require("fcm-node");
const firebaseAdmin = require("firebase-admin");
const serviceAccount = require("../securefiles/ble-sample-app-firebase-adminsdk.json");
const serverKey = "AAAAAbFpaFw:APA91bHdjIFoKbS9BR5SOifoppb3jblQfEux39zHPus2BF2H2VT-KZmHKGd2xQoUs6rFHTnlnvLDJ3yWrJIeJEza1RLq9_TQtlqC2cFXc8GXbsPzIVpVQlIXR1hOBBC41g-5IXe8ChC4";
// const fcm = new FCM(serverKey); 
//
// firebaseAdmin.initializeApp();
// const app = initializeApp();

firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount)
});

let ids = [
    "f8fR58EcR5OKGeHkMXAYoX:APA91bGZISlJeVZC0eA5GpUmYBDNtudoHC-460F6nkFL2wlwq4b7OoEGFnwo97AZFkIstoKUma7FRettTRKjPolnQ7xGyLXvhBR8dOh8Nt89DUuyg2aOQc0QYTA7RlI4LQjXmeSm0xrR",
    "d2EB8A5_TaeUNrWUDS8LO9:APA91bF7zW0PCGDSfIHBedeCOH-RCZR_Y-dWklzMShD5OM-_z6H7yQWwnQbS0k8A1VJp9QtA_o9K3VpEuSKWXGfhFpq9oF4RN9SiOeCs7S2dJYdloIedUDHrsvydmeH-13DEQuTnSrCy"
];

// router.post("/", function(req, res, next) {
//     const { registration_ids, title, body } = req.body;

//     console.log("req", req);
//     console.log("res", res);
//     console.log("next", next);

//     if(ids.length > 0) {
//         const message = {
//             registration_ids: ids, // array required
//             notification: {
//                 title: title || "Default title",
//                 body: body || "Default Message",
//                 sound:  "default",
//                 icon: "ic_launcher",
//                 badge:  "1",
//                 click_action: "FCM_PLUGIN_ACTIVITY",
//             },
//             priority: "high",
//             data: {
//                 action: "Test", // Action Type
//                 payload: "message" // payload
//             }
//         }
//         fcm.send(message, (err, response) => {
//             if (err) {
//                 console.log("Something has gone wrong!", JSON.stringify(err));
//                 res.send(err);
//             } else {
//                 console.log("Successfully sent with response: ", response);
//                 res.send(response)
//             }
//         });
//     } else {
//         res.send({ message: "No registration ids found." });
//     }
// });

router.post("/", function(req, res, next) {

    // console.log("req", req);
    // console.log("res", res);
    // console.log("next", next);

    const message = {
        tokens: [
            "f8fR58EcR5OKGeHkMXAYoX:APA91bGZISlJeVZC0eA5GpUmYBDNtudoHC-460F6nkFL2wlwq4b7OoEGFnwo97AZFkIstoKUma7FRettTRKjPolnQ7xGyLXvhBR8dOh8Nt89DUuyg2aOQc0QYTA7RlI4LQjXmeSm0xrR",
            "cIFioSgNQwSdByVWp8e42R:APA91bG27YZAJ7Dg6yhYjmUWFnGUc0Xhm_H_PJ7wMO-yndoneHbDbs9Tz4KJbIgAIZhWn3NaXHoYCWTRSXEf5YIzhfarBWUfTwiDckg6uC88Hn4_ImY4-tSGjYHLdXxh1vA2ac0wcF2C"
        ],
        notification: {
          body: "This is an FCM notification that displays an image!",
          title: "FCM Notification",
        },
        topic: "news",
        // apns: {
        //   payload: {
        //     aps: {
        //       "mutable-content": 1,
        //     },
        //   },
        //   fcm_options: {
        //     image: "image-url",
        //   },
        // },
        android: {
          notification: {
            image: "image-url",
          },
        },
    };


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

    console.log(":::::::::", message);
    
    firebaseAdmin.messaging().sendEachForMulticast(msg)
    .then(response => {
        console.log("Successfully sent message:", response);
        res.send(response);
    })
    .catch(error => {
        console.log("ERROR while firebase admin", error);
        res.send(error);
    });

    // firebaseAdmin
    //     .messaging()
    //     .send(message)
    //     .then(response => {
    //         console.log("Successfully sent message:", response);
    //         res.send(response);
    //     })
    //     .catch(error => {
    //         console.log("ERROR while firebase admin", error);
    //         res.send(error);
    //     });

});

module.exports = router;
