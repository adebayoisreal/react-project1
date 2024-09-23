import { useState } from "react"

const TaskModal = ({isOpen, onClose, onAddTask}) => {
    const [taskName, setTaskName] = useState ('');
    const [taskDescription, setTaskDescription] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(taskName.trim() && taskDescription.trim()){
            onAddTask({name:taskName, description:taskDescription})
            setTaskName('')
            setTaskDescription('')
            onClose()
        }

    }
    if (!isOpen) return null

    return(
        <div className="modal">

            <div className="modal-content">
                <h2>
                    Add new Task
                </h2>
                <form onSubmit={handleSubmit}>
            <label>
                Task Name:
                <input type="text" value={taskName} onChange={(e)=> setTaskName(e.target.value)} />
            </label>
            <label >
                Description:
                <textarea value={taskDescription} onChange={(e)=> setTaskDescription(e.target.value)} className="description"/>
            </label>
            <button type="submit" className="mod button">Add Task</button>
            <button type="button" onClick={onClose} className="mod button">Cancel</button>
                    
                </form>
            </div>
        </div>
    )

}

export default TaskModal