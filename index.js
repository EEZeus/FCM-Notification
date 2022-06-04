// Import the functions you need from the SDKs you need

import FCM from "fcm-call";

const serverKey =
  "AAAAhK4EAJw:APA91bFZBMK5YrPfTc-WXqgyMJ5YTEQxODROKopTDFBvxAVmhxGZ93vyPviJUi-ToYn5Fp7PffjEBw2hgyKh_oB4w0ixsXCELoNWy1k1cJlp75WdYQqcYkVWCx3VQl40fLzll5Ri9arg";
const referenceKey =
  "c2pr43EqSZyUX-h5NmMwQs:APA91bHJZnPg_LSzojrPDQjBQ5De7o63JnCE8AC8nctLl3lwtumSO2PVUsXdZrjiiMpVYLkUBZoThNLjoqoorPSPRzjRJKuF60uArNtR6d66pintI3wSpnw0hxPV7nAiXJO2q4mpL4fj"; //Device Key
let title = "Ehsan sends a message !";
let message = "How You Doin :)";

FCM.FCM(serverKey, referenceKey, title, message);
