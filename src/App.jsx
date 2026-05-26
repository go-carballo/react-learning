import { useState } from "react";
import "./App.css";

const fakeLoginResponse = {
	accessValue: "valor-de-sesion-de-ejemplo",
	user: {
		id: 1,
		name: "Ada",
	},
};

function App() {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const [session, setSession] = useState(null);
	const [token, setToken] = useState("");
	const [protectedData, setProtectedData] = useState(null);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [isRequesting, setIsRequesting] = useState(false);

	function handleChange(event) {
		const { name, value } = event.target;

		setFormData({
			...formData,
			[name]: value,
		});
	}

	function fakeLogin({ email, password }) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (email.trim() === "") {
					reject(new Error("Email requerido"));
					return;
				}

				if (password !== "123456") {
					reject(new Error("Password incorrecto"));
					return;
				}

				resolve(fakeLoginResponse);
			}, 1000);
		});
	}

	function fakePrivateRequest(accessToken) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (accessToken === "") {
					reject(new Error("Sesión expirada"));
					return;
				}

				resolve({
					message: "Datos privados obtenidos correctamente",
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				});
			}, 1000);
		});
	}

	async function handleSubmit(event) {
		event.preventDefault();
		setIsLoading(true);
		setError("");
		setSession(null);
		setToken("");
		setProtectedData(null);

		try {
			const response = await fakeLogin(formData);

			setSession(response);
			setToken(response.accessValue);
			setFormData({ email: "", password: "" });
		} catch (error) {
			setError(error.message);
		} finally {
			setIsLoading(false);
		}
	}

	async function handlePrivateRequest() {
		setIsRequesting(true);
		setError("");
		setProtectedData(null);

		try {
			const response = await fakePrivateRequest(token);

			setProtectedData(response);
		} catch (error) {
			setError(error.message);
			setSession(null);
			setToken("");
		} finally {
			setIsRequesting(false);
		}
	}

	function expireSession() {
		setToken("");
		setProtectedData(null);
		setError("Sesión expirada");
	}

	return (
		<section id="center">
			<h1>Login simulado</h1>

			<form className="login-form" onSubmit={handleSubmit} noValidate>
				<label>
					Email
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="ada@example.com"
					/>
				</label>

				<label>
					Password
					<input
						type="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
						placeholder="Probá con 123456"
					/>
				</label>

				<button type="submit" disabled={isLoading}>
					{isLoading ? "Ingresando..." : "Ingresar"}
				</button>
			</form>

			{error && <p className="error-message">Error: {error}</p>}

			{session && (
				<article className="session-data">
					<h2>Sesión iniciada</h2>
					<p>Token guardado: {token || "sin token"}</p>
					<p>ID usuario: {session.user.id}</p>
					<p>Nombre: {session.user.name}</p>

					<button type="button" onClick={expireSession}>
						Simular sesión expirada
					</button>

					<button
						type="button"
						onClick={handlePrivateRequest}
						disabled={isRequesting}
					>
						{isRequesting ? "Pidiendo datos..." : "Hacer request privada"}
					</button>
				</article>
			)}

			{protectedData && (
				<article className="protected-data">
					<h2>Respuesta privada</h2>
					<p>{protectedData.message}</p>
					<p>Authorization: {protectedData.headers.Authorization}</p>
				</article>
			)}
		</section>
	);
}

export default App;
