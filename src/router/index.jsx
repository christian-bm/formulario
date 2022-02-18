import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const Router = () => {
	return (
		<>
			<Switch>
				<Route exact path={"/"}>
					<Signup />
				</Route>
				<Route path={"/login"}>
					<Login />
				</Route>
				<Route path={"/dashboard/:user"}>
					<Dashboard />
				</Route>
			</Switch>
		</>
	);
};
export default Router;
