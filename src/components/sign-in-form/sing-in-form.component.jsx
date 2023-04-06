import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";


import {
	signInWithGooglePopup,
	signInAuthWithEmailAndPassword
} from '../../utils/firebase.utils'

import './sign-in-form.styles.scss'


const defaultFormFields = {
	email: '', password: '',

}

const SingInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const {email, password} = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields)
	}

	const signInWithGoogle = async () => {
		await signInWithGooglePopup()
	}

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await signInAuthWithEmailAndPassword(email, password);
			resetFormFields()
		} catch (error) {
			console.log(error.code)
			if(error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found'){
				alert('wrong credentials')
			}
		}

	}

	const handleChange = event => {
		const {name, value} = event.target;
		setFormFields({...formFields, [name]: value});
	}
	return (
		<div className="sign-up-container">
			<h2>Already have an account?</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Email"
					type="email"
					required
					onChange={handleChange}
					name="email"
					value={email}
				/>
				<FormInput
					label="Password"
					type="password"
					required
					onChange={handleChange}
					name="password"
					value={password}
				/>
				<div className='buttons-container'>
					<Button type="submit">Sign In</Button>
					<Button type='button' onClick={signInWithGoogle} buttonType={BUTTON_TYPE_CLASSES.google}>google sign in</Button>
				</div>

			</form>
		</div>
	)
}

export default SingInForm