import React from 'react'
import { Task } from './Task'

export const Todolist = ({list,deltask}) => {
 

  return (
    <div>
     { list.map (i=><Task list={i} del={deltask}></Task>)} 
    </div>
  )
}
