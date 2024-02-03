import { useState } from 'react'
import { Todolist } from './components/Todolist'
import { Addlistform } from './components/Addlistform'
import './App.css'

function App() {
  let obj=[{
      key:1,
      date:"1-2-23",
      task:"bring water",
      isdone:true,
  },{
    key:2,
    date:"1-3-23",
    task:"do conding",
    isdone:false,
},{
  key:3,
  date:"2-4-23",
  task:"do nothing",
  isdone:false,
}]
   const [list,setList]=useState(obj);
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

  return (
    <>
    <Addlistform addtask={handleadd}/>
    <Todolist  deltask={deltask} list={list}/>
    </>
  )
}

export default App
