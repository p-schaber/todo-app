import React from "react"

// Import Components
import Form from "./Form"
import TodoList from "./TodoList"

function App() {
    return (
        <div>
            <h1>Pete's Todo list</h1>
            <Form />
            <TodoList />
        </div>
    )
}

export default App