import { StyledForm } from "./styled";

const Form = ({ className, children, onSubmit }) => {
	return (
		<StyledForm className={className} onSubmit={onSubmit}>
			{children}
		</StyledForm>
	);
};
export default Form;
