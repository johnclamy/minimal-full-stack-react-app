import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

import { firebaseConfig } from '../config/firebase'

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const storage = firebase.storage()
export const database = firebase.firestore()