// AddTask.jsx
import React, { useState } from 'react';

function AddTask({addTask}) {
  const [value,setValue]=useState('')
  function AddValue(val){
    addTask(val);
    setValue("")
  }
  return (
    <>  
      <div className='flex items-center'>
        <input
          type='text'
          className='border border-gray-300 px-4 py-2 rounded-lg mr-2 w-64'
          placeholder='Add Task....'
          value={value}
          onChange={(e)=>{
            setValue(e.target.value)
          }}
        />
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={()=>{AddValue(value);}}>
          Add
        </button>
      </div>
    </>
  );
}

export default AddTask;
