import React, { useState } from "react";

export default function ToDoList() {

    const [tasks, setTasks] = useState(["Do laundry", "Mow the lawn"]);
    const [newTask, setNewTask] = useState("");


    function handleTaskChange(e) {
        setNewTask(e.target.value);
    }

    function addTask() {
        setTasks(t => [...t, newTask]);
        setNewTask("");
    }

    function removeTask(index) {

        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if(index > 0) {
            const updatedTasks = [...tasks];
            [[updatedTasks[index]], [updatedTasks[index-1]]] = 
            [[updatedTasks[index-1]], [updatedTasks[index]]];
            setTasks(updatedTasks);
        }
    }

    function  moveTaskDown(index) {
        if(index < tasks.length) {
            const updatedTasks = [...tasks];
            [[updatedTasks[index]], [updatedTasks[index+1]]] = 
            [[updatedTasks[index+1]], [updatedTasks[index]]];
            setTasks(updatedTasks);
        }
    }

    function moveToLast(index) {
        if(index !== tasks.length-1) {
            const updatedTasks = tasks.filter((_, i) => i !== index);
            setTasks([...updatedTasks, tasks[index]]);
        }
    }

    function moveToFirst(index) {
        if(index !== 0) {
            const updatedTasks = tasks.filter((_, i) => i !== index);
            setTasks([tasks[index], ...updatedTasks]);
        }
    }

    return(
        <div className="container">
            <h1>To-Do List</h1>
            <div>
                <input placeholder="Add task..."
                       value={newTask}
                       onChange={handleTaskChange}
                       className="input"></input>
                <button onClick={addTask}>Add</button>
            </div>
            <ol className="taskCard">
                {tasks.map((task, index) => <li key={index}>
                    <span>{task}</span>
                    <div className="buttons">
                        <button onClick={() => removeTask(index)}>Remove</button>
                        <button onClick={() => moveTaskUp(index)}>Up</button>
                        <button onClick={() => moveTaskDown(index)}>Down</button>
                        <button onClick={() => moveToLast(index)}>Last</button>
                        <button onClick={() => moveToFirst(index)}>First</button>
                    </div>
                </li>)}
            </ol>
        </div>
    );

}

