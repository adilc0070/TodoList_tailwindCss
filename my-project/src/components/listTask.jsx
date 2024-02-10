import React from 'react';
import { FaTrash,FaCheckSquare } from 'react-icons/fa';

function ListTask({task,index,removeTask}) {
  return (
    <>
      <div className='flex items-center justify-between py-2 border-b'>
      <div className="flex-grow md:w-1/2">
        <div className="text-gray-800 overflow-hidden whitespace-nowrap overflow-ellipsis">{task.title}</div>
      </div>
      <div className="flex items-center ml-3">
        <button className='bg-green-700 hover:bg-green-900 text-white py-2 px-4 rounded mr-2'>
          <FaCheckSquare/>
        </button>
        <button className='bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded' onClick={()=>{removeTask(index)}}>
        <FaTrash />
        </button>
      </div>
    </div>
    </>
    
  );
}

export default ListTask;
