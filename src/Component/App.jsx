import React from "react";
import notes from "../notes";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";


// console.log(notes);

function createNotes(noteItem) {
    return (
        <Note
            key = {noteItem.key}
            title = {noteItem.title}
            content = {noteItem.content}
        />
    );
}


function App() {
    return (
        <div>
            <Header />
            {notes.map(createNotes)}
            <Footer />
        </div>
    )
}

export default App;