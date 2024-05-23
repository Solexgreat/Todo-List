import React from 'react'
// import Form from './Form'
// import { useState } from 'react'

const TodoList = ({
	todos,
	setTodos,
	setEdit}) =>{

	const handleComplete = (id) => {
		setTodos(
			todos.map((todo) => (
				todo.id === id ? {...todo, completed: !todo.completed} : todo
			)))
	}

	const isComplete = (id) => {
		const todo = todos.find((todo) => todo.id === id);
		return todo.completed ? "button-complete-green task-button" :
		"button-complete-red task-button"
		}

	const handleDelete = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	}

	const handleEdit = (id) => {
		const checkComplete = todos.find((todo) => todo.id === id)
		if (!checkComplete.completed){
			setEdit(
				todos.find((todo) =>
					todo.id === id
				)
			);
		}
	}

	return (
		<div>
			{todos.map((todo) => (
				<li className='todo-list' key={todo.id}>
					<input
					type='text'
					value={todo.title}
					onChange={(e) => e.preventDefault()}
					className="list" />
					<div>
							<button onClick={() => handleComplete(todo.id)}
							className= {isComplete(todo.id)}>
								<i className='fa fa-check-circle'></i>
							</button>
							<button className='button-edit task-button'
							onClick={() => handleEdit(todo.id)}>
								<i className='fa fa-edit'></i>
							</button>
							<button className='button-delete task-button'
							onClick={() => handleDelete(todo.id) }
							>
								<i className='fa fa-trash'></i>
							</button>
					</div>
				</li>
			))}
		</div>
		
	)
}

export default TodoList;