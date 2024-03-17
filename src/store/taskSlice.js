
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    tasks: [
        {
            id: 1,
            title: "Hello world",
            description: "Hello Me Mahesh Pathak",
            dueDate: Date,
            status: "Completed",
            isEditing: false
        }
    ],
    filter: 'All'
}


export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addtasks: (state, action) => {
            const { title, description, dueDate, status } = action.payload;
            const tasks = {
                id: nanoid(),
                title: title,
                description: description,
                dueDate: dueDate,
                status: status,
            };
            state.tasks.push(tasks);
        },
        removetasks: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },
        edittasks: (state, action) => {
            const { id, newTitle, newDescription, newDueDate, newStatus } = action.payload;
            const taskToEdit = state.tasks.find(task => task.id === id);
            if (taskToEdit) {
                taskToEdit.title = newTitle;
                taskToEdit.description = newDescription;
                taskToEdit.dueDate = newDueDate;
                taskToEdit.status = newStatus;
                taskToEdit.isEditing = false; //test
            }
        },
        toggleEditMode: (state, action) => {
            const taskId = action.payload;
            const taskToToggle = state.tasks.find(task => task.id === taskId);
            if (taskToToggle) {
                taskToToggle.isEditing = !taskToToggle.isEditing; // Toggle isEditing property
            }
        },
        updateTaskStatus: (state, action) => {
            const { id, status } = action.payload;
            const taskToUpdate = state.tasks.find(task => task.id === id);
            if (taskToUpdate) {
                taskToUpdate.status = status;
            }
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        }
    }
});


export const { addtasks, removetasks, edittasks, toggleEditMode,updateTaskStatus,setFilter } = taskSlice.actions
export default taskSlice.reducer
