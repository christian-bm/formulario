import { StyledInput } from "./styled";

const Input = ({ type, placeholder, register }) => {
	return (
		<StyledInput
			type={type}
			placeholder={placeholder}
			{...register}
		/>
	);
};
export default Input;
