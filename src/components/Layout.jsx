import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { ToDoContext } from '../App';

export default function Layout() {
    const todoCtx = useContext(ToDoContext);
    const tasks = todoCtx?.tasks || [];
    const incompleteCount = tasks.filter(t => !t.complete).length;
    const importantCount = tasks.filter(t => t.important).length;

    return (
        <div className='Layout'>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/counter">Counter</Link></li>
                        <li><Link to="/create">Create</Link></li>
                        <li><Link to="/list1">List</Link></li>
                        <li><Link to="/git">GitHub User</Link></li>
                        <li><Link to="/reviews" style={{ marginLeft: 8 }}>Reviews</Link></li>
                    </ul>
                </nav>
                <div style={{ marginTop: 10 }}>
                    <span>Невиконаних задач: <b>{incompleteCount}</b></span>
                    <span style={{ marginLeft: 20 }}>Важливих задач: <b>{importantCount}</b></span>
                </div>
            </header>
            <main>
                {/* Content will be rendered here */}
                <Outlet />
            </main>
            <footer>
                <p>&copy; 2025 React App</p>
            </footer>
        </div>
    )
}
