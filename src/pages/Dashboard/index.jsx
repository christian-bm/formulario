import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";

const Dashboard = () => {
	const { user } = useParams();

	const history = useHistory();

	return (
		<div className="div_dashboard">
			<h1>Bem vindo {user}</h1>
			<Button
				type={"button"}
				onClick={() => history.push("/login")}>
				Voltar
			</Button>
		</div>
	);
};

export default Dashboard;
