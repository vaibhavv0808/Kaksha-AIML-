/* Service worker: shows push notifications when the Kaksha site is closed.
   Keep this file in the SAME folder as index.html (the repo root). */
importScripts(
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js'
);
firebase.initializeApp({
  apiKey: "AIzaSyA3J1803r11bfKmBfO9S3X6vsM3tewmBSQ",
  authDomain: "kaksha-6cce6.firebaseapp.com",
  projectId: "kaksha-6cce6",
  storageBucket: "kaksha-6cce6.firebasestorage.app",
  messagingSenderId: "862101273981",
  appId: "1:862101273981:web:f73fcf302eaf7e31e82014"
});
firebase.messaging(); // notification messages are displayed automatically in the background
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.matchAll({type: 'window', includeUncontrolled: true}).then(list => {
    for (const c of list) { if ('focus' in c) return c.focus(); }
    return clients.openWindow(self.registration.scope);
  }));
});
