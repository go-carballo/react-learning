import { useContext } from "react";
import { UserContext } from "./UserContext";

function UserProfile() {
	const user = useContext(UserContext);

	return (
		<section>
			<h2>Usuario logueado</h2>
			<p>Nombre: {user.name}</p>
			<p>Email: {user.email}</p>
		</section>
	);
}

export default UserProfile;
