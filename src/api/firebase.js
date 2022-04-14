// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";

import * as firebase from 'firebase'
import settings from './settings'

// Initialize Firebase
const firebaseApp = firebase.initializeApp(settings)

// Get a reference to the database service
// const database = getDatabase(app);

export const db = firebaseApp.database()
export default firebaseApp