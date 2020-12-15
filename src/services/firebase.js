import firebase from 'firebase'
import 'firebase/storage'

export const app = firebase.initializeApp({
  apiKey: "AIzaSyAHEYvH9ulIFyZwElttHUXN0yIo8IhzdQM",
  authDomain: "tiny-pets-d3df3.firebaseapp.com",
  databaseURL: "https://tiny-pets-d3df3.firebaseio.com",
  projectId: "tiny-pets-d3df3",
  storageBucket: "tiny-pets-d3df3.appspot.com",
  messagingSenderId: "532399202040",
  appId: "1:532399202040:web:73f6a8928fc1689987650d"
});