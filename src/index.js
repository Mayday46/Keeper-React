//1. Create a new React app.
//2. Create a App.jsx component.
//3. Create a Header.jsx component that renders a <header> element
//to show the Keeper App name in an <h1>.
//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
//6. Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/

//HINT: You will need to study the classes in teh styles.css file to appy styling.
import React from "react";
import ReactDOM from "react-dom";
import App from "./Component/App";

ReactDOM.render(<App />, document.getElementById("root"));

// Challenge. Render all the notes inside notes.js as a seperate Note component.

// 1. Implement the add note functionality.
// - Create a constant that keeps track of the title and content.
// - Pass the new note back to the App.
// - Add a new note to the notes array.
// - Take that array and render seperate Note components for each item.

// 2. Implement the delete note functionality.
// - Callback from the note component to trigger a delete function.
// - Use the filter function to filter out the item that needs to be deleted.
// - Pass the ID of the item that needs to be deleted back to the App.

