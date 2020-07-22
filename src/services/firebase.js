import app from 'firebase/app'

import { firebaseConfig } from '../config/firebase'

export default class Firebase {
  constructor () {
    app.initializeApp(firebaseConfig)
  }
 }