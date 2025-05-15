import Todo from "./components/Todo.tsx"
import AddTaskForm from "./components/addTaskForm.tsx"
import Modal from "./components/Modal.tsx"
import { useState } from "react";
import { nanoid } from "nanoid";

const INITIAL_TASK_LIST = [
  {id: "eat", name: "Eat", completed: true}, 
  {id: "sleep", name: "Sleep", completed: false}, 
  {id: "repeat", name: "Repeat", completed: false}];

function App() {
  const [tasks, setTaskList] = useState(INITIAL_TASK_LIST);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function addTask(newName: string){
    const newTask = { id: `todo-${nanoid()}`, name: newName, completed: false};

    const taskListCopy = tasks.slice();
    taskListCopy.push(newTask);
    setTaskList(taskListCopy);
    closeModal();
  }

  function toggleTaskCompleted(id: string){
    const updatedTasks = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTaskList(updatedTasks);
  }

  function deleteTask(id: string){
    const updatedTasks = tasks.filter((task) => {
      return id !== task.id
    });
    setTaskList(updatedTasks);
  }

  function closeModal(){
    setIsModalOpen(false);
  }

  function openModal(){
    setIsModalOpen(true);
  }

  const taskList = tasks.map((task) => 
    <Todo id={task.id} 
          key={task.id} 
          name={task.name} 
          completed={task.completed} 
          toggleTaskCompleted={toggleTaskCompleted}
          delete={deleteTask}/>);
  
  return (
      <main className="m-4"> {/* Tailwind: margin level 4 on all sides */}
          <button onClick={openModal} className="bg-blue-600 text-white border-1 rounded-lg p-2">New task</button>
          <Modal headerLabel="New Task" isOpen={isModalOpen} onCloseRequested={closeModal}> 
                <AddTaskForm onNewTask={addTask}/> {/* Unfortunately comments in JSX have to be done like this */}
          </Modal>
          <section>
              <h1 className="text-xl font-bold">To do</h1>
              <ul>
                {taskList}
              </ul>
          </section>
      </main>
  );
}

export default App;