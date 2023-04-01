import SingUpForm from "../../components/sign-up-form/sing-up-form.component";
import SingInForm from "../../components/sign-in-form/sing-in-form.component";

import './authentication.styles.scss'

const Authentication = () => {

	return (
		<div className="authentication-container" >
			<h1>Sign In Page</h1>
			<SingUpForm/>
			<SingInForm/>
		</div>
	)
}

export default Authentication;