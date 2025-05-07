import Todo from "./components/Todo.jsx"
import AddTaskForm from "./components/addTaskForm.jsx"

function App() {
  return (
      <main className="m-4"> {/* Tailwind: margin level 4 on all sides */}
          <AddTaskForm/> {/* Unfortunately comments in JSX have to be done like this */}
          <section>
              <h1 className="text-xl font-bold">To do</h1>
              <ul>
                <Todo name="Eat" />
                <Todo name="Sleep" />
                <Todo name="Repeat" />
              </ul>
          </section>
      </main>
  );
}

export default App;