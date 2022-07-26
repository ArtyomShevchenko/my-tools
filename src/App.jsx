import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import Notes from "./Pages/Notes";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";

let notes = [
	{
		title: "first title",
		text: "first text",
		time: "26.07.2022",
	},
	{
		title: "second title",
		text: "second text",
		time: "26.07.2022",
	},
	{
		title: "third title",
		text: "third text",
		time: "26.07.2022",
	}
]

function App() {
	const [notesState, setNotesState] = React.useState(notes);

	// React.useEffect()

	const addNote = (data) => {
		setNotesState(notes.push(data))
	}

	const delateNote = (data) => {
		
		const newNotes = notes.filter(currentValue => {
			return currentValue !== data
		})

		// setNotesState(...newNotes)
		notes = [...newNotes]

		setNotesState(notes)
	}

	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Notes notes={notes} addNote={addNote} delateNote={delateNote} />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;