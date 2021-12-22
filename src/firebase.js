import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBvaMpm53pA1QCFdBYtd2oYBAEiuZ_oSaY",
    authDomain: "depop-pop.firebaseapp.com",
    databaseURL: "https://depop-pop-default-rtdb.firebaseio.com",
    projectId: "depop-pop",
    storageBucket: "depop-pop.appspot.com",
    messagingSenderId: "163000847559",
    appId: "1:163000847559:web:85f8da04be809d18e502e2",
    measurementId: "G-N6JYHL99C4"
};

const app = initializeApp(firebaseConfig);

export default app;
