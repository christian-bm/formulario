import { StyledButton } from "./styled";

const Button = ({ className, type, children, onClick }) => {
	return (
		<StyledButton type={type} onClick={onClick} className={className}>
			{children}
		</StyledButton>
	);
};

export default Button;
