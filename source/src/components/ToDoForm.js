import React from 'react';
import {useState, useEffect} from 'react';


function ToDoForm ({addTask}) {
   const [userInput, setUserInput] = useState('')
   const [userPlaceholder, setUserPlaceholder] = useState('Add task')

   const handleSubmit = (e) => {
      e.preventDefault()
      addTask(userInput)
      setUserInput('')
   }

   const handleChange = (e) => {
      setUserInput(e.currentTarget.value)
   }

   const handleKeyPress = (e) => {
      if(e.key === 'Enter') {
         handleSubmit(e)
      }
   }

   useEffect(() => {
      if(userInput.length >= 23) {
         setUserPlaceholder('Too many symbols!')
      } else if (userInput) {
         setUserPlaceholder('Add task')
      }
   })

   return (
      <form onSubmit={handleSubmit}>
         <input className='todo-input'
            value={userInput}
            type='text'
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            placeholder={userPlaceholder}
         />
         <button className='todo-button'>Save</button>
      </form>
   )
}

export default ToDoForm
