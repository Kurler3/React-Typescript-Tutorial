import React, {useState, useCallback} from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';


 
// REACT FUNCTIONAL COMPONENT
const App:React.FC = () => {

  const [todo, setTodo] = useState<string>("");

  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = useCallback((e: React.FormEvent) => {
      e.preventDefault();

      if(todo) {
        setTodos([...todos, { id: Date.now(),todo: todo, isDone: false }]);
        setTodo("");
      }

  }, [todo, todos]);

  return (
    <div className="App">
      <span className='heading'>Taskify</span>

      {/* INPUT */}
      <InputField
        todo={todo}
        setTodo={setTodo}
        handleAdd={handleAdd}
      />

      {/* MAPPING OF TODOS */}
      <TodoList
          todos={todos}
          setTodos={setTodos}
      />

    </div>
  );
}

export default App;
