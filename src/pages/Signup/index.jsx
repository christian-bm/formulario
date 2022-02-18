import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Form from "../../components/Form";
import Span from "../../components/Span";
import { api } from "../../services/api";
import { useState } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { GrFormViewHide, GrFormView } from "react-icons/gr";

const Signup = () => {
	const history = useHistory();

	const [passwordType, setPasswordType] = useState("password");
	const [confirmPasswordType, setConfirmPasswordType] = useState("password");

	const handlePasswordType = () => {
		setPasswordType(passwordType === "password" ? "text" : "password");
	};

	const handleConfirmPasswordType = () => {
		setConfirmPasswordType(
			confirmPasswordType === "password" ? "text" : "password"
		);
	};

	const formSchema = yup.object().shape({
		name: yup.string().required("Campo obrigatório"),
		username: yup.string().required("Campo obrigatório"),
		email: yup.string().email("E-mail inválido").required("Campo obrigatótio"),
		confirm_email: yup
			.string()
			.oneOf([yup.ref("email")], "E-mails diferentes")
			.required("Campo obrigatório"),
		password: yup
			.string()
			.required("Campo obrigatório")
			.matches(
				/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
				"A senha deve conter pelo menos 8 caracteres, uma letra maiúscula, um número e um caractere especial!"
			),
		confirm_password: yup
			.string()
			.oneOf([yup.ref("password")], "Senhas diferentes")
			.required("Campo obrigatório"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(formSchema),
	});

	const onSubmitFunciton = (data) => {
		delete data.confirm_email;
		delete data.confirm_password;
		api.post(data);
		toast.success("Cadastro realizado com sucesso!");
		reset();
		handlePasswordType();
		handleConfirmPasswordType();
	};

	return (
		<>
			<Form onSubmit={handleSubmit(onSubmitFunciton)}>
				<Input
					type={"text"}
					placeholder={"Nome completo"}
					register={register("name")}
				/>
				<Span>{errors.name?.message}</Span>
				<Input
					type={"text"}
					placeholder={"Nome de usuário"}
					register={register("username")}
				/>
				<Span>{errors.username?.message}</Span>
				<Input
					type={"text"}
					placeholder={"E-mail"}
					register={register("email")}
				/>
				<Span>{errors.email?.message}</Span>
				<Input
					type={"text"}
					placeholder={"Confirmar e-mail"}
					register={register("confirm_email")}
				/>
				<Span>{errors.confirm_email?.message}</Span>
				<div>
					<Input
						type={passwordType}
						placeholder={"Senha"}
						register={register("password")}
					/>
					<Span>{errors.password?.message}</Span>
					<Button
						className={"button_view"}
						type={"button"}
						onClick={() => handlePasswordType()}>
						{passwordType === "text" ? <GrFormView /> : <GrFormViewHide />}
					</Button>
				</div>
				<div>
					<Input
						type={confirmPasswordType}
						placeholder={"Confirmar senha"}
						register={register("confirm_password")}
					/>
					<Span>{errors.confirm_password?.message}</Span>
					<Button
						className={"button_view"}
						type={"button"}
						onClick={() => handleConfirmPasswordType()}>
						{confirmPasswordType === "text" ? (
							<GrFormView />
						) : (
							<GrFormViewHide />
						)}
					</Button>
				</div>
				<Button className={"button_submit"} type={"submit"}>CADASTRAR</Button>
				<Button
					className={"button_page_login"}
					type={"button"}
					onClick={() => history.push("/login")}>
					Ja possui conta?
				</Button>
			</Form>
		</>
	);
};
export default Signup;
