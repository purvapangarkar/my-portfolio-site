importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging.js');

firebase.initializeApp({'apiKey': 'YOUR_API_KEY', 'authDomain': 'YOUR_PROJECT_ID.firebaseapp.com', 'projectId': 'YOUR_PROJECT_ID', 'storageBucket': 'YOUR_PROJECT_ID.appspot.com', 'messagingSenderId': 'YOUR_SENDER_ID', 'appId': 'YOUR_APP_ID'});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon-192.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
