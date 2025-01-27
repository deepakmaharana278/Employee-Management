import React from 'react'

const TaskListNumber = ({data}) => {
  return (
      <div className='flex  mt-10 justify-between gap-5 screen'>
          <div className='px-9 py-6 w-[45%] bg-blue-400 rounded-xl'>
              <h2 className='text-3xl font-semibold'>{data.taskNumbers.newTask}</h2>
              <h3 className='texr-xl font-medium'>New Task</h3>
          </div>
          <div className='px-9 py-6 w-[45%] bg-green-400 rounded-xl'>
              <h2 className='text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
              <h3 className='texr-xl font-medium'>Completed Task</h3>
          </div>
          <div className='px-9 py-6 w-[45%] bg-yellow-300 rounded-xl'>
              <h2 className='text-3xl  text-gray-800 font-semibold'>{data.taskNumbers.active}</h2>
              <h3 className='texr-xl  text-gray-800 font-medium'>Accepted Task</h3>
          </div>
          <div className='px-9 py-6 w-[45%] bg-red-400 rounded-xl'>
              <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
              <h3 className='texr-xl font-medium'>Failed Task</h3>
          </div>
    </div>
  )
}

export default TaskListNumber