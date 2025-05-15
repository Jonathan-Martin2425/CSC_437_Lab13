import { useState } from "react";

interface AddTFProps {
    onNewTask: (newName: string) => void,

}

function AddTaskForm(props : AddTFProps){
    const [text, setText] = useState("");

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        setText(e.target.value);
    }

    function handleNewTask(){
        if(text){
            props.onNewTask(text);
            setText("");
        }
    }

    return (
        <div className="flex flex-row gap-2 mb-2">
            <input value={text} placeholder="New task name" className="border-1 rounded-lg p-1" onChange={handleChange}/>
            <button onClick={handleNewTask} className="bg-blue-600 text-white border-1 rounded-lg p-2">Add task</button>
        </div>
    );
}

export default AddTaskForm;