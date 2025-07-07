import { useState, useContext } from "react";
import { ToDoContext } from "../App";

export default function ToDoItem({ id, title, date, complete, important, removeFunction }) {
    const todoCtx = useContext(ToDoContext);
    const isGlobal = !!todoCtx && todoCtx.tasks && todoCtx.updateTask;
    const [status, setStatus] = useState(complete);

    function toggleStatus() {
        if (isGlobal) {
            todoCtx.updateTask(id, { complete: !complete });
        } else {
            setStatus(!status);
        }
    }

    const currentStatus = isGlobal
        ? (todoCtx.tasks.find(t => t.id === id)?.complete ?? false)
        : status;

    return (
        <li onClick={toggleStatus} onDoubleClick={() => removeFunction(id)} className={currentStatus ? "done" : ""}>
            <input type="checkbox" checked={currentStatus} readOnly />
            {important ? <span className="important">!</span> : ""}
            {title ?? "No title"}
            {date ? <span className="deadline">{date}</span> : ""}
            <button className="btn-del" onClick={e => { e.stopPropagation(); removeFunction(id); }}>Del</button>
        </li>
    );
}

