import React, { useState } from "react";

export default function ToDoList() {

    return(
        <div className="container">
            <h1>To-Do List</h1>
            <div>
                <input></input>
                <button>Add</button>
            </div>
            <div className="taskCard">
                <p>task</p>
                <div className="buttons">
                    <button>Remove</button>
                    <button>Up</button>
                    <button>Down</button>
                    <button>Last</button>
                    <button>First</button>
                </div>
            </div>
        </div>
    );

}

