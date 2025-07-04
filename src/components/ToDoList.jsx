import { useState } from "react";
import ToDoItem from "./ToDoItem";
import CreateTask from "./CreateTask";

export default function ToDoList({ tasksList }) {

    const [list, setList] = useState(tasksList);

    function removeItem(id) {
        // list = list.filter(i => i.id !== id);
        setList(list.filter(i => i.id !== id));
    }
    function createItem(task) {
        // generate new ID
        const newId = list.length > 0 ? Math.max(...list.map(i => i.id)) + 1 : 1;
        // add new task with new ID
        task.id = newId;
        setList([...list, task]);
    }

    return (
        <>
            {
                list.length === 0 ?
                    <p>No tasks!</p>
                    :
                    <ul className="todo_list">
                        {list.map(task => <ToDoItem key={task.id} {...task} removeFunction={removeItem} />)}
                    </ul>
            }
            <CreateTask onCreate={createItem} />
        </>
    );
}
