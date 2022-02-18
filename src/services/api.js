export class api {
	static get() {
		const data = localStorage.getItem("users");
		if (data) {
			const currentData = JSON.parse(data);
			return currentData.users;
		}
		return data;
	}
	static post(user) {
		const data = JSON.parse(localStorage.getItem("users"));
		if (!data) {
			const newData = { users: [user] };
			localStorage.setItem("users", JSON.stringify(newData));
		} else {
			const newData = { users: [...data.users, user] };
			localStorage.setItem("users", JSON.stringify(newData));
		}
	}
}
