// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider
} from "firebase/auth"
import  {
	getFirestore,
	doc,
	getDoc,
	setDoc
} from 'firebase/firestore'


const firebaseConfig = {
	apiKey: "AIzaSyDt7apiFb3DM0vMywDVbueEMxNYxPLeYww",
	authDomain: "crwn-clothing27.firebaseapp.com",
	projectId: "crwn-clothing27",
	storageBucket: "crwn-clothing27.appspot.com",
	messagingSenderId: "242156109846",
	appId: "1:242156109846:web:7938dffb5e4f358a14b537"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, 'users', userAuth.uid);

	const userSnapshot = await getDoc(userDocRef);
	console.log(userSnapshot)
	console.log(userSnapshot.exists())

	if(!userSnapshot.exists()){
		const {displayName, email} = userAuth;
		const createdAt = new Date();
		try{
			await setDoc(userDocRef,{
				displayName,
				email,
				createdAt
			})
		}catch (e) {
			console.log(e.message)
		}
	}
	return userDocRef;
}