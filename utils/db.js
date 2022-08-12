import admin from 'firebase-admin';
import fs from 'fs';

if(process.env.GCP == "1") {
    admin.initializeApp({
        credential: admin.credential.applicationDefault()
    });
} else {
    let rawdata = fs.readFileSync('./key.json');
    let serviceAccount = JSON.parse(rawdata);

    if (!admin.apps.length) {
        try {
            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount),
            });
        } catch (error) {
            console.log('Firebase admin initialization error', error.stack);
        }
    }
}

export default admin.firestore();