import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

import { firebaseConfig } from '../config/firebase'

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const storage = firebase.storage()
const database = firebase.firestore()

export { auth, storage, database }