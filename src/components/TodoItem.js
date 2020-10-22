import React, { useState } from "react"

// function TodoItem(props) {}
const TodoItem = (props) => {

    /** Array Destructuring
     * var checkStateVariable = useState(false) // Returns a pair
     * var isChecked = checkStateVariable[0] // First item in a pair
     * var setCheck = checkStateVariable[1] // Second item in a pair
     */
    const [isChecked, setCheck] = useState(props.item.complete)
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    return(
        <div className="todo-item">
            <input 
                type="checkbox"
                checked={isChecked}
                onClick={() => setCheck(!isChecked)}/>
            <p style={isChecked ? completedStyle : null}>{props.item.text}</p>
        </div>
    )
}

export default TodoItem