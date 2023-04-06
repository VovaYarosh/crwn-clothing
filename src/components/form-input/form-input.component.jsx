import './form-input.styles'
import {FormInputLabel, Group, Input} from "./form-input.styles";

const FormInput = ({ label, ...otherProps}) => {
	return (
		<Group>
			{label && (<FormInputLabel
				shrink={otherProps.value.length}>
				{label}
			</FormInputLabel>)}
			<Input  className="form-input" {...otherProps}/>
		</Group>
	)
}

export default FormInput
