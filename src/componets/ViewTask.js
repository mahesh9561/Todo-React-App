import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removetasks, edittasks, updateTaskStatus, setFilter } from '../store/taskSlice';

function ViewTasks() {
    console.log('i am open')
    const tasks = useSelector(state => state.tasks.tasks);
    const filter = useSelector(state => state.tasks.filter);
    const dispatch = useDispatch();

    const [editingTaskId, setEditingTaskId] = useState(null);
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newDueDate, setNewDueDate] = useState('');
    const [newStatus, setNewStatus] = useState('');

    const handleEdit = (task) => {
        setEditingTaskId(task.id);
        setNewTitle(task.title);
        setNewDescription(task.description);
        setNewDueDate(task.dueDate);
        setNewStatus(task.status);
    };

    const handleSaveEdit = () => {
        dispatch(edittasks({
            id: editingTaskId,
            newTitle,
            newDescription,
            newDueDate,
            newStatus,
        }));
        setEditingTaskId(null);
    };

    const handleStatusChange = (taskId, newStatus) => {
        dispatch(updateTaskStatus({ id: taskId, status: newStatus }));
    };

    const handleFilterChange = (e) => {
        dispatch(setFilter(e.target.value));
    };

    const filteredTasks = filter === 'All' ? tasks : tasks.filter(task => task.status === filter);

    return (
        <>
            <div className="flex items-center mb-4 p-10">
                <label htmlFor="filter" className="mr-2">Filter:</label>
                <select
                    id="filter"
                    value={filter}
                    onChange={handleFilterChange}
                    className="px-3 py-2 border rounded-md text-sm leading-tight focus:outline-none focus:border-blue-500"
                >
                    <option value="All">All</option>
                    <option value="Uncompleted">Uncompleted</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
            <div className="font-semibold text-lg mb-2 ">Tasks</div>
            <ul className="space-y-4 p-10">
                {filteredTasks.map((task) => (
                    <li key={task.id} className="border rounded-md p-4 flex items-center justify-between">
                        {editingTaskId === task.id ? (
                            <div className="flex-grow">
                                <input
                                    type="text"
                                    value={newTitle}
                                    onChange={(e) => setNewTitle(e.target.value)}
                                    className="w-full mb-2 px-3 py-2 border rounded-md text-sm leading-tight focus:outline-none focus:border-blue-500"
                                />
                                <input
                                    type="text"
                                    value={newDescription}
                                    onChange={(e) => setNewDescription(e.target.value)}
                                    className="w-full mb-2 px-3 py-2 border rounded-md text-sm leading-tight focus:outline-none focus:border-blue-500"
                                />
                                <input
                                    type="date"
                                    value={newDueDate}
                                    onChange={(e) => setNewDueDate(e.target.value)}
                                    className="w-full mb-2 px-3 py-2 border rounded-md text-sm leading-tight focus:outline-none focus:border-blue-500"
                                />
                                <select
                                    value={newStatus}
                                    onChange={(e) => setNewStatus(e.target.value)}
                                    className="w-full mb-2 px-3 py-2 border rounded-md text-sm leading-tight focus:outline-none focus:border-blue-500"
                                >
                                    <option value="Uncompleted">Uncompleted</option>
                                    <option value="Completed">Completed</option>
                                </select>
                                <button
                                    onClick={handleSaveEdit}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                                >
                                    Save
                                </button>
                            </div>
                        ) : (
                            <div className="flex-grow">
                                <div className="font-semibold">{task.title}</div>
                                <div>{task.description}</div>
                                <div>{task.dueDate}</div>
                                <div>{task.status}</div>
                            </div>
                        )}
                        <div>
                            <button
                                onClick={() => handleEdit(task)}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleStatusChange(task.id, task.status === 'Completed' ? 'Uncompleted' : 'Completed')}
                                className={`py-2 px-4 rounded focus:outline-none ${task.status === 'Completed' ? 'bg-yellow-500 hover:bg-yellow-700' : 'bg-green-500 hover:bg-green-700'} text-white font-semibold mr-2`}
                            >
                                {task.status === 'Completed' ? 'Mark Uncompleted' : 'Mark Completed'}
                            </button>
                            <button
                                onClick={() => dispatch(removetasks(task.id))}
                                className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Remove
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </>

    );
}

export default ViewTasks;
