import React from 'react';
import closeicon from '../closeicon.png';


function ToDo ({todo, removeTask}) {
	return (
		<div>
		   <div key={todo.id} className='todo-item'>
            {todo.task}
	      <div className='todo-item-remove' onClick={() => removeTask(todo.id)}>
            <img src={closeicon} alt='icon'/>
         </div>
			</div>
		</div>
	)
}

export default ToDo