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

                <form onSubmit={handleSubmit} className="task-form">
            <label>
                Task Name:
                <input type="text" value={taskName} onChange={(e)=> setTaskName(e.target.value)} className="input-task-name" />
            </label>
            <label >
                Description:
                <textarea value={taskDescription} onChange={(e)=> setTaskDescription(e.target.value)} className="input-task-desc"/>
            </label>
            <div className="modal-buttons"> 
            <button type="submit" className="add-task-btn">Add Task</button>
            <button type="button" onClick={onClose} className="cancel-btn">Cancel</button>
            </div>   
                </form>
            </div>
        </div>
    )

}

export default TaskModal