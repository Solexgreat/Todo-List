import React, { useEffect } from 'react'
import {v4 as uuidv4} from 'uuid'
 import { useSpeechContext } from './TodoListWithSpeechToText'


const Form = ( {todos,
	setTodos,
	inputs,
	setInputs,
	edit,
	setEdit}) => {


	const {
		startListening,
		transcript,
		resetTranscript,
		} = useSpeechContext();

	const updateTodo = (title, id, completed) => {
		const newTodo = todos.map((todo) => (
			todo.id === id ? {title, id, completed} : todo
		))

		setTodos(newTodo);
		setEdit("");
	}

	useEffect(() => {
		if (transcript ){
			setInputs(transcript)
		}
  }, [setInputs, transcript]);


	const onInputChanged = (e) =>{
		setInputs(e.target.value)
	}

	useEffect(() =>{
		if (edit){
			setInputs(edit.title)
		} else {
				setInputs(" ")
		}
	}, [setInputs, edit]);



	const onFormSubmit = (e) => {
		e.preventDefault();
		
		if (!edit) {
			setTodos([...todos, { id: uuidv4(), title: inputs, completed: false }]);
			setInputs('');
			resetTranscript();
		} else {
			updateTodo(inputs, edit.id, edit.completed);
		}
	}
	return (
		<div>
			<form id="todoForm" >
				<div>
					<input type='text' placeholder='Enter Todo...' className='Task-Input'
					value= {inputs}
					require
					onChange={onInputChanged}
					/>
					<button onClick={startListening} className='mic' type='button'> <img src={require("../Img/free-microphone-icon-342-thumb.png")} alt='Microphone'  width='20px'/> </button>
				</div>
				<button className='button-Add' type='submit' onClick={onFormSubmit }> Add </button>
			</form>
		</div>
	)
}

export default Form;