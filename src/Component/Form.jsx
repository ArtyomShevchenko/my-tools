import React from "react";

const Form = ({ addNote }) => {
	const [state, setState] = React.useState();

	const handleSubmit = (event) => {
		event.preventDefault();

		if (event.target[0].value || event.target[1].value) {
			addNote({
				title: event.target[0].value,
				text: event.target[1].value,
				time: new Date().toLocaleString(),
			});

			event.target[0].value = "";
			event.target[1].value = "";
		}
	}

	return (
		<form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: ".5rem"}}>
			<input type="text" placeholder="Справа" style={{ padding: ".5rem" }} />
			<input type="text" placeholder="Запис" style={{ padding: ".5rem" }} />
			<input type="submit" value="Додати" style={{ padding: ".5rem" }} />
		</form>
	)

}

export default Form;