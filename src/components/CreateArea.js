import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import firebase from "../Firebase";

function CreateArea(props) {
    const [note, setNote] = useState({title: "", content: ""});

    function handleChange(event) {
        const { name, value } = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        // props.onAdd(note);
        const todoRef = firebase.database().ref('todo');
        todoRef.push(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }


    return (
        <div>
            <form className="create-note">
                <input 
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                    placeholder="Title"
                />
                <textarea 
                    name="content"
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Take a note..."
                    rows="3"
                />
                {/* <Zoom> */}
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                {/* </Zoom> */}
            </form>
        </div>
    );
}

export default CreateArea;