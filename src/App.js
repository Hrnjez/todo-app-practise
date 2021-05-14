import Form from './components/Form'
import TodoList from './components/TodoList'
import './App.css';
import { useState } from 'react'

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([])
  return (
    <div className="App">
     <header>
       Todo List
     </header>
     <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
     <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
