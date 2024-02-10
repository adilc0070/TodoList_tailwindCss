import React,{useState} from 'react';
import alertify from 'alertifyjs';

import AddTask from './addTask.jsx';
import ListTask from './listTask.jsx';

function ToDo() {
  const [tasks, setTasks] = useState([]);
  let check=(v,arr)=>{
    let re=[]
      for(let i=0;i<arr.length;i++){
        re.push(arr[i].title==v)
      }
      return re.includes(true)
  }
  let addTask=(title)=>{
    if(title.trim()==''){
      alertify.set('notifier','position', 'top-center');
      alertify.error('Please Enter Somthing');

    }else if(check(title,tasks)){
      alertify.set('notifier','position', 'top-center');
      alertify.warning('Task Already Exist');
    }else{
      const newTask=[...tasks,{title}]
      setTasks(newTask);
    }
  }
  let removeTask=(index)=>{
    const newTask=[...tasks]
    newTask.splice(index,1);
    setTasks(newTask)
  }
  return (
    <div className='flex justify-center items-center min-h-screen bg-slate-900'>
      <div className=' bg-white p-8 rounded-lg shadow'>
        <div className='text-2xl font-bold mb-4'>ToDo App</div>
        <div className='mb-4 flex justify-center items-center'>
          <AddTask addTask={addTask} />
        </div>
        <div className="overflow-y-auto max-h-80">
            {tasks.map((task, index) => (
              <ListTask key={index} task={task} removeTask={removeTask} index={index} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default ToDo;
