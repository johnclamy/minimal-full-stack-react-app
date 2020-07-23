import app from 'firebase/app'
import 'firebase/auth'

import { firebaseConfig } from '../config/firebase'

(function init () {
  app.initializeApp(firebaseConfig)
})()

export default function authentication () {
  return app.auth()
}