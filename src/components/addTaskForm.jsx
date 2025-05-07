function AddTaskForm(){
    return (
        <div className="flex flex-row gap-2 mb-2">
            <input placeholder="New task name" className="border-1 rounded-lg p-1"/>
            <button className="bg-blue-600 text-white border-1 rounded-lg p-2">Add task</button>
        </div>
    );
}

export default AddTaskForm;