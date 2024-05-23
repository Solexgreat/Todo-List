import './App.css';
import Header from './Components/Header';
import Form from './Components/Form';
import { useState } from 'react';
import TodoList from './Components/TodoList';
import {TodoListWithSpeechToText} from './Components/TodoListWithSpeechToText';


function App() {
  const [inputs, setInputs] = useState('')
	const [todos, setTodos] = useState([])
  const [edit, setEdit] = useState(null)

  return(
    <div className="container">
      <div className="app-wraper">
        <div>
          <Header/>
          <TodoListWithSpeechToText>
            <Form
            todos = {todos}
            setTodos= {setTodos}
            inputs = {inputs}
            setInputs= {setInputs}
            edit={edit}
            setEdit={setEdit}
            />
          </TodoListWithSpeechToText>

          <TodoList
          todos={todos}
          setTodos={setTodos}
          setEdit={setEdit}
          />
          
        </div>
      </div>
    </div>
  )
}

export default App;
