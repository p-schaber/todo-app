import React from "react"

const Form = () => {
    return (
        <form>
            <input className="todo-input" type="text" />
            <button className="todo-button" type="submit">
                <i className="fa fa-plus-square"></i>
            </button>
        </form>
    )
}

export default Form