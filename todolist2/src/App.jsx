import { useState } from 'react';
import Todo from './components/Todo'
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      IsCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      IsCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      IsCompleted: false,
    },
  ]);

  const [search, setSearch] = useState("");

const addTodo = (text, category) => {

  const newTodos = [...todos, {
    id: Math.floor(Math.random() * 10000),
    text,
    category,
    IsCompleted: false,
  },];

  setTodos(newTodos);

};

const completeTodo = (id) => {
  const newTodos = [...todos]
  newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
  setTodos(newTodos);
}

const removeTodo = (id) => {
  const newTodos = [...todos]
  const filteredTodos = newTodos.filter((todo) => todo.id !== id ? todo : null);
  setTodos(filteredTodos); 
}

  return (
    <div className='app'>
      <div className="caixatitulo">      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      </div>
      <div className='todo-list'>
        {todos.filter((todo => todo.text.toLowerCase().includes(search.toLowerCase()))).map((todo) => (
         <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
