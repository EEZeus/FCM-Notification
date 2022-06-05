const express = require("express");
const FCM = require("fcm-call");
const app = express();
const serverKey =
  "AAAAhK4EAJw:APA91bFZBMK5YrPfTc-WXqgyMJ5YTEQxODROKopTDFBvxAVmhxGZ93vyPviJUi-ToYn5Fp7PffjEBw2hgyKh_oB4w0ixsXCELoNWy1k1cJlp75WdYQqcYkVWCx3VQl40fLzll5Ri9arg";
let title = "FCM Notification !";

app.post("/post/:token/:message", (req, res) => {
   console.log("Connected to React");

   FCM.FCM(serverKey, req.params.token, title, req.params.message);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
