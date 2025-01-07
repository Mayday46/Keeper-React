import React from "react";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";


function App() {
    const [notes, setNotes] = React.useState([]);

    function addNote(note) {
        setNotes(prevNotes => {
            return [...prevNotes, note];
        });
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }


    return (
        <div>
            <Header />
            <CreateArea onAdd = {addNote}/>
            {notes.map((noteItem, index) => {
                return (
                    <Note
                        key = {index}
                        id = {index}
                        title = {noteItem.title}
                        content = {noteItem.content}
                        onDelete = {deleteNote}
                    />
                );
            })}
            <Footer />
        </div>
    );
}

export default App;