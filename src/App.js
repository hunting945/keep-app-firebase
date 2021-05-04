import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import firebase from "./Firebase";

function App() {
  //const [notes, setNotes] = useState([]);
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const todoRef = firebase.database().ref('todo');
    todoRef.on("value", (snapshot) => {
      const todos = snapshot.val();
      const todoList = [];
      for(let id in todos){
        todoList.push({id, ...todos[id]});
      }
      setTodoList(todoList);
    });
  }, []);

  function deleteNote(id) {
    setTodoList(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea />
      {todoList.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={noteItem.id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;