import { useState } from 'react'
import { Todolist } from './components/Todolist'
import { Addlistform } from './components/Addlistform'
import './App.css'

function App() {
  let obj=[{
      key:1,
      date:"2023-01-01",
      task:"bring water",
      isdone:true,
  },{
    key:2,
    date:"2024-01-01",
    task:"do conding",
    isdone:false,
},{
  key:3,
  date:"2023-03-04",
  task:"do nothing",
  isdone:false,
}]
   const [list,setList]=useState(obj);
   const [editob,setEditob]=useState(null);
function handleadd(obj){
  const len=list.length;
 
 //console.log(list[len-1].key);;
 let newkey
 if(len>0){
 newkey=list[len-1].key;
 }else{
   newkey=1;
 }
     setList([...list,
    {...obj,key:newkey+1}]);
}
const deltask=(obj) => {
    setList((list) =>
         {
      return list.filter((curob) => {
        // console.log(obj);
       return curob.key != obj});
         }
    );
  };


  const updatedone=(obj) => {

    let updatedList=[...list];
  
    let index=updatedList.findIndex((v)=>v.key==obj);
    
    let newob=updatedList[index];

    if(newob.isdone==true){
      newob.isdone=false;
    }else{
      newob.isdone=true;
    }
    updatedList.splice(index,1,newob);
    setList(updatedList);
  
   
  };
  const handleupdate=(ob)=>{
   
     setEditob(ob);
  }
  function updatetask(ob){

    let updatedList=[...list];
    console.log(updatedList)
    console.log(ob.key);
    let index=updatedList.findIndex((v)=>v.key==ob.key);
    console.log(index);
    updatedList.splice(index,1,ob);

    setList(updatedList);
    setEditob(null);
   
  }

  return (
    <>
    <Addlistform addtask={handleadd} updatetask={updatetask}editob={editob}/>
  <Todolist  deltask={deltask} list={list} updatedone={updatedone} handleupdate={handleupdate}/>
    </>
  )
}

export default App
