import React, { useState,useEffect} from 'react'
import "./Addlistform.css"

export const Addlistform = ({addtask,editob,updatetask}) => {


  const deafult={
    task:"",
    date:"",
    isdone:false
  }
  
  const[task,setTask]=useState(deafult)
  useEffect(() => {
    if(editob!=null){
      setTask(editob)
    }
  }, [editob])
  
  
     

  function handlesubmit(e){
    e.preventDefault();
    if(editob==null)
    {
    addtask(task);
    }else{
      updatetask(task)
     
    }
    setTask(deafult);
  }
  function handleclick(e){
    e.stopPropagation();
    //  console.log(e.target.value);
     setTask({...task,
      [e.target.name]:e.target.value});
   
       
  }
  return (
    <div className="formcontainer">
      <form onSubmit={handlesubmit}>
        <input name="task" type="text" onChange={handleclick} placeholder='Enter task' value={task.task} required/>
        <div>
        <input name="date"  id="dateinput"type="date" placeholder='Duedate' onChange={handleclick} value={task.date} required />
        <input type='submit' value={editob?"EDIT":"ADD TODO"}/>
        </div>
      </form>
    </div>
  )
}



