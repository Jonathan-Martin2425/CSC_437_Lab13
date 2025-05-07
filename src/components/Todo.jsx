import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Todo(props){
    return  (
        <li className="flex gap-2">
        <label>
            <input type="checkbox" className="appearance-none w-4 h-4 border-3 border-gray-400 rounded-xs bg-white"/> {props.name}
        </label>
        <button className='text-gray-500'><FontAwesomeIcon icon={faTrash} /></button>
        </li>
    );
}

export default Todo;