import React, { useState } from "react"

// function TodoItem(props) {}
const TodoItem = (props) => {

    /** Array Destructuring
     * var checkStateVariable = useState(false) // Returns a pair
     * var isChecked = checkStateVariable[0] // First item in a pair
     * var setCheck = checkStateVariable[1] // Second item in a pair
     */
    const [isChecked, setCheck] = useState(false)

    return(
        <div className="todo-item">
            <input 
                type="checkbox"
                checked={isChecked}
                onChange={() => setCheck(isChecked ? false : true)}/>
            <p>{props.item.text}</p>
            <button>Click here!</button>
        </div>
    )
}

export default TodoItem