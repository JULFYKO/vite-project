import { useState, useContext } from "react";
import ToDoItem from "./ToDoItem";
import CreateTask from "./CreateTask";
import { ToDoContext } from "../App";

export default function ToDoList({ tasksList }) {
    const todoCtx = useContext(ToDoContext);
    const isGlobal = !tasksList;
    const [list, setList] = useState(tasksList || []);

    function removeItem(id) {
        if (isGlobal) {
            todoCtx.removeTask(id);
        } else {
            setList(list.filter(i => i.id !== id));
        }
    }
    function createItem(task) {
        if (isGlobal) {
            todoCtx.addTask(task);
        } else {
            const newId = list.length > 0 ? Math.max(...list.map(i => i.id)) + 1 : 1;
            task.id = newId;
            setList([...list, task]);
        }
    }
    const renderList = isGlobal ? todoCtx.tasks : list;

    return (
        <>
            {
                renderList.length === 0 ?
                    <p>No tasks!</p>
                    :
                    <ul className="todo_list">
                        {renderList.map(task => <ToDoItem key={task.id} {...task} removeFunction={removeItem} />)}
                    </ul>
            }
            <CreateTask onCreate={createItem} />
        </>
    );
}
