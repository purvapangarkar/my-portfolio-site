const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.requestPermission()
  .then(() => messaging.getToken())
  .then(token => {
    console.log("Push token:", token);
  })
  .catch(err => console.error("Push permission denied", err));

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/my-portfolio-site/service-worker.js")
    .then(() => console.log("Service Worker Registered"))
    .catch(err => console.error("SW Registration Failed:", err));
}

    

