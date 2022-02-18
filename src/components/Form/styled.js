import styled from "styled-components";

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	align-items: center;
	background-color: transparent;
	width: 380px;
	max-height: 430px;
	margin: auto;
	padding-top: 30px;
	border: black solid 2px;
	border-radius: 30px;

	.button_submit {
		width: 175px;
		height: 30px;
		border: black solid 1px;
		border-radius: 8px;
	}
	.button_submit:hover {
		transform: scale(1.05);
	}

	.button_page_login {
		background-color: transparent;
        border: unset;
		border-bottom: transparent solid 2px;
		margin: 35px 0px 5px 210px;
	}
	.button_page_login:hover {
		border-bottom: black solid 2px;
	}

	span {
		align-self: flex-start;
		height: 25px;
		margin-left: 60px;
		max-width: 273px;
	}

	div {
		position: relative;
		display: flex;
		flex-direction: column;
		span {
			margin-left: 6px;
		}
		button {
			position: absolute;
			right: 5px;
			top: 0px;
			width: 25px;
			height: 25px;
			border: unset;
			padding: unset;
			background-color: transparent;

			svg {
				margin-top: 3px;
				width: 25px;
				height: 25px;
			}
		}
	}
`;
