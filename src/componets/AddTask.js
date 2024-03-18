import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addtasks } from '../store/taskSlice';
import Navbar from './Navbar';

function AddTask() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [status, setStatus] = useState('Uncompleted'); // Default status

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() === '' || dueDate.trim() === '' || description.trim() === '') {
            alert('Please fill in all required fields.');
            return;
        }
        dispatch(addtasks({ title, description, dueDate, status }));
        setTitle('');
        setDescription('');
        setDueDate('');
        setStatus('Uncompleted');
        alert("Task added in list")
    }

    return (
        <>
            <div className="max-w-md mx-auto mt-5 p-5 bg-white rounded shadow-lg">
                <h2 className="text-xl mb-3">Add Task</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-semibold text-gray-600">Title</label>
                        <input
                            id="title"
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full mt-1 px-3 py-2 border rounded-md text-sm leading-tight focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-semibold text-gray-600">Description</label>
                        <input
                            id="description"
                            type="text"
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full mt-1 px-3 py-2 border rounded-md text-sm leading-tight focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="dueDate" className="block text-sm font-semibold text-gray-600">Due Date</label>
                        <input
                            id="dueDate"
                            type="date"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                            className="w-full mt-1 px-3 py-2 border rounded-md text-sm leading-tight focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="status" className="block text-sm font-semibold text-gray-600">Status</label>
                        <select
                            id="status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="w-full mt-1 px-3 py-2 border rounded-md text-sm leading-tight focus:outline-none focus:border-blue-500"
                        >
                            <option value="Uncompleted">Uncompleted</option>
                            {/* <option value="Completed">Completed</option> */}
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Add Task
                    </button>
                </form>
            </div>
        </>
    );
}

export default AddTask;
