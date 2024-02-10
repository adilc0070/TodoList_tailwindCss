import React from 'react';

function ListTask({task,index,removeTask}) {
  return (
    <>
      <div className='flex items-center justify-between py-2 border-b'>
      <div className="flex-grow md:w-1/2">
        <div className="text-gray-800 overflow-hidden whitespace-nowrap overflow-ellipsis">{task.title}</div>
      </div>
      <div className="flex items-center ml-3">
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2'>
          Edit
        </button>
        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={()=>{removeTask(index)}}>
          Delete
        </button>
      </div>
    </div>
    </>
    
  );
}

export default ListTask;
