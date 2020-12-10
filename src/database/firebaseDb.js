import Firebase from 'firebase';


let config = {
    apiKey: "AIzaSyCqwtwGSo59Yabt60yocB7uSI9ykIcRFDM",
    authDomain: "foodie-52a3f.firebaseapp.com",
    databaseURL: "https://foodie-52a3f.firebaseio.com",
    projectId: "foodie-52a3f",
    storageBucket: "foodie-52a3f.appspot.com",
    messagingSenderId: "382393801958",
    appId: "1:382393801958:android:d91dd3dd321c2a56f52f27"
};

let app = Firebase.initializeApp(config);
export const db = app.database();