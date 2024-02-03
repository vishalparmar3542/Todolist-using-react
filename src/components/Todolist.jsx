import React from 'react'
import { Task } from './Task'

export const Todolist = ({list,deltask,updatedone,handleupdate}) => {
 

  return (
    <div>
     { list.map (i=><Task list={i} del={deltask} updatedone={updatedone} handleupdate={handleupdate}></Task>)} 
    </div>
  )
}
