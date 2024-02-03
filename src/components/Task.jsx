import React from 'react'
import './Task.css'

export const Task = ({list,del}) => {
  console.log(list)
  function handledelete(e){
    e.stopPropgation;
    const key=e.target.id;
    del(key);
  }
  return (
    <div className='taskconatainer'>
    
    <div className="checkbox-wrapper-11">
  <input id={list.key} className='02' type="checkbox" name="r" value="2" defaultChecked={list.isdone}/>
  <label htmlFor={list.key}>To-do</label>
</div>


    
      <p className='taskcontent'>{list.task}</p>
      <p>{list.date}</p>

      <button className="button-89" id={list.key} onClick={handledelete} role="button">Delete</button>

    </div>
  )
}
