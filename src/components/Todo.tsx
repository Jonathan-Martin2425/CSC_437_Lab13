import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

interface TodoProps {
    id: string,
    name: string,
    completed: boolean,
    toggleTaskCompleted: (id: string) => void,
    delete: (id: string) => void,
}

function Todo(props : TodoProps){
    return  (
        <li id={props.id} className="flex gap-2">
            <label>
                <input type="checkbox" 
                className="appearance-none w-4 h-4 border-3 border-gray-400 rounded-xs bg-white checked:bg-blue-800 checked:border-0" 
                defaultChecked={props.completed}
                onChange={() => props.toggleTaskCompleted(props.id)}/> 
                {props.name}
            </label>
            <button onClick={() => props.delete(props.id)} className='text-gray-500'><FontAwesomeIcon icon={faTrash} /></button>
        </li>
    );
}

export default Todo;