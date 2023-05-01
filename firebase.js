const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://unity-services-67a5e.firebaseio.com'
});

const firestore = admin.firestore();

console.log("working")
