import React from "react";
import Form from "../Component/Form";

function Notes({ notes, addNote, delateNote }) {

	return (
		<main>
			<div className="container">
				<div className="wrapper">
					<h1>Notes</h1>
					
					<Form addNote={addNote} />

					{notes.length === 0
						? <h2 style={{ textAlign: "center", marginTop: "2rem" }}>All delete</h2>
						: <ul style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
							{notes.map((element, index) => {
								return (
									<li key={index} style={{ border: "1px solid green", padding: ".5rem", listStyle: "none", position: "relative" }}>
										<div style={{ width: "1rem", height: "1rem", backgroundColor: "green", color: "white", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", position: "absolute", top: "-.5rem", left: "-.5rem", fontSize: ".5rem" }}>{index + 1}</div>
										<h3>{element.title}</h3>
										<p>{element.text}</p>
										<p>{element.time}</p>
										<button onClick={() => delateNote(element)}>Delete</button>
									</li>
								)
							})}
						</ul>}
				</div>
			</div>
		</main>
	);
};

export default Notes;