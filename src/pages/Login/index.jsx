import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";

import { useState } from "react";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Span from "../../components/Span";
import { api } from "../../services/api";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { GrFormViewHide, GrFormView } from "react-icons/gr";

const Login = () => {
	const [passwordType, setPasswordType] = useState("password");

	const history = useHistory();

	const handlePasswordType = () => {
		setPasswordType(passwordType === "password" ? "text" : "password");
	};

	const formSchema = yup.object().shape({
		username: yup.string().required("Campo obrigatório"),
		password: yup.string().required("Campo obrigatório"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(formSchema),
	});

	const onSubmitFunciton = (data) => {
		const users = api.get();
		if (users) {
			const result = users.find(
				(user) =>
					user.password === data.password &&
					(user.username === data.username || user.email === data.username)
			);
			if (result) {
				history.push(`/dashboard/${result.name}`);
			} else {
				toast.error("Login ou senha incorreto!");
			}
		} else {
			toast.warn("Nenhum usuário cadastrado!");
		}
	};

	return (
		<>
			<Form className={"form_login"} onSubmit={handleSubmit(onSubmitFunciton)}>
				<Input
					type={"text"}
					placeholder={"Nome de usuáro / E-mail"}
					register={register("username")}
				/>
				<Span>{errors.username?.message}</Span>
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
				<Button className={"button_submit"} type={"submit"}>Logar</Button>
				<Button className={"button_page_login"} type={"button"} onClick={() => history.push("/")}>
					Cadastre-se
				</Button>
			</Form>
		</>
	);
};

export default Login;
