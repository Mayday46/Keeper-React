import React from "react";

function CreateArea(props) {

    const [note, setNote] = React.useState({
        title: "",
        content: ""
});

function handleChange(event) {
    const {name, value} = event.target;

    setNote(prevNote => {
        return {
            ...prevNote,
            [name]: value
        };
    });
}

function submitNote(event) {
    props.onAdd(note);
    if (note.title.trim() === "" || note.content.trim() === "") {
        alert("Please fill out both the title and content fields.");
        return;
    } else {
        setNote({
            title: "",
            content: ""
        });
    }
    event.preventDefault();
}

    return (
        <div>
            <form>
                <input
                    name = "title"
                    onChange = {handleChange}
                    placeholder = "Title"
                    value = {note.title}
                />
                <textarea
                    name = "content"
                    onChange = {handleChange}
                    value = {note.content}
                    placeholder = "Take a note..."
                    rows = "3"
                />
                <button onClick = {submitNote}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;