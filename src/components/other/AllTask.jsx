import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
     const [userData,setUserData] = useContext(AuthContext)

  return (
      <div id='adminover' className='bg-[#1c1c1c] p-5 mt-5 overflow-auto'>
          <div className='bg-red-400 py-2 px-4 flex justify-between items-center rounded mb-2'>
                  <h2 className='w-1/5 text-lg font-semibold'>Employee Name</h2>
                  <h3 className='w-1/5 text-lg font-semibold'>New Task</h3>
                  <h5 className='w-1/5 text-lg font-semibold'>Active Task</h5>
                  <h5 className='w-1/5 text-lg font-semibold'>Completed</h5>
                  <h5 className='w-1/5 text-lg font-semibold'>Failed</h5>
          </div>
          <div className=' overflow-auto'>    
          {userData.map((elem,idx) => {
              return <div key={idx} className='border-2 border-emerald-500 py-2 px-4 flex justify-between items-center rounded mb-2'>
                  <h2 className='w-1/5'>{elem.firstName}</h2>
                  <h3 className='w-1/5 text-blue-600'>{elem.taskNumbers.newTask}</h3>
                  <h5 className='w-1/5 text-yellow-600'>{elem.taskNumbers.active}</h5>
                  <h5 className='w-1/5 text-white'>{elem.taskNumbers.completed}</h5>
                  <h5 className='w-1/5 text-red-600'>{elem.taskNumbers.failed}</h5>
          </div>
          })}
          </div>
    </div>
  )
}

export default AllTask