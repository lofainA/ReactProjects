import React, { useState } from "react";

export default function ToDoList() {

    const [tasks, setTasks] = useState(["Do laundry", "Mow the lawn"]);
    const [newTask, setNewTask] = useState("");


    function handleTaskChange(e) {
        setNewTask(e.target.value);
    }

    function addTask() {
        if(newTask !== '') {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
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
            <h1 className="heading">To-Do List</h1>
            <div className="add-task-container">
                <input placeholder="Add task..."
                       value={newTask}
                       onChange={handleTaskChange}
                       className="new-task"
                       onKeyDown={(e) => {
                        if(e.key == "Enter"){
                            addTask();
                        }
                       }}></input>
                <button onClick={addTask}
                        className="add-btn">
                    Add
                </button>
            </div>
            <div className="taskCard">
                {tasks.map((task, index) => <div className="tasks" key={index}>
                    <span>{task}</span>
                    <div className="buttons">
                        <button onClick={() => removeTask(index)}
                                className="remove-task task-btn">
                            <img src="/delete.png" alt="remove"></img>
                        </button>
                        <button onClick={() => moveTaskUp(index)}
                                className="move-task-up task-btn">
                            <img src="/arrow-up.png" alt="Up"/>
                        </button>
                        <button onClick={() => moveTaskDown(index)}
                                className="move-task-down task-btn">
                            <img src="/arrow-down.png" alt="Down"/>
                        </button>
                        <button onClick={() => moveToLast(index)}
                                className="move-last task-btn">
                            <img src="/double-down.png" alt="Last"/>
                        </button>
                        <button onClick={() => moveToFirst(index)}
                                className="move-first task-btn">
                            <img src="/double-up.png" alt="First"/>
                        </button>
                    </div>
                </div>)}
            </div>
        </div>
    );

}

