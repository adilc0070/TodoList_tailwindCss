import React,{useState,useEffect} from 'react';
import alertify from 'alertifyjs';

import AddTask from './addTask.jsx';
import ListTask from './listTask.jsx';

function ToDo() {
  const [tasks, setTasks] = useState([]);
  useEffect(()=>{
    let storedTasks=localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  let check = (v, arr) => {
    return arr.some(task => task.title === v);
  };
  let addTask=(title)=>{
    if(title.trim()==''){
      alertify.set('notifier','position', 'top-center');
      alertify.error('Please Enter Somthing');

    }else if(check(title,tasks)){
      alertify.set('notifier','position', 'top-center');
      alertify.warning('Task Already Exist');
    }else{
      const newTask=[...tasks,{title,checked:false}]
      alertify.set('notifier','position', 'top-right');
      alertify.success('Task Added');
      setTasks(newTask);
    }
  }
  let removeTask=(index)=>{
    const newTask=[...tasks]
    newTask.splice(index,1);
    setTasks(newTask)
  }
  let completeTask=(index)=>{
    let completedTask=tasks.map((task,i)=>{
      if(i===index){
        alertify.success('Task completed');
        return {...task,checked:true}
      }else{
        return task
      }
    });
    setTasks(completedTask)
  }
  let notCompleteTask=(index)=>{
    let notCompletedTask=tasks.map((task,i)=>{
      if(i===index){
        return {...task,checked:false}
      }else{
        return task
      }
    });
    setTasks(notCompletedTask)
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
              <ListTask key={index} task={task} removeTask={removeTask} index={index} completeTask={completeTask} notCompleteTask={notCompleteTask}/>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ToDo;
