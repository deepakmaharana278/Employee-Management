import React, {  useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'


const CreateTask = () => {

   const [userData, setUserData] = useContext(AuthContext)

   const [taskTitle, setTaskTitle] = useState('')
   const [taskDescription, setTaskDescription] = useState('') 
   const [taskDate, setTaskDate] = useState('')
   const [asignTo, setAsignTo] = useState('')
   const [catagory, setCatagory] = useState('')

   const submitHandler = (e) => {
      e.preventDefault()
      // console.log(taskTitle, taskDescription, taskDate, asignTo, catagory)

      const newTask = { taskTitle, taskDescription, taskDate, catagory, active: false, completed: false, newTask: true, failed: false }

      // console.log(newtask)
      const data = userData

      // console.log(data)
      data.forEach((elem) => {
         if (asignTo == elem.firstName) {
            elem.tasks.push(newTask)
            // console.log(elem)
            elem.taskNumbers.newTask = elem.taskNumbers.newTask+1
         }
      })
      setUserData(data);
      console.log(data);
      
      
      setTaskTitle('')
      setAsignTo('')
      setCatagory('')
      setTaskDate('')
      setTaskDescription('')
   }

   

  return (
    <div className='p-5 bg-[#1c1c1c] rounded mt-7'>
        <form onSubmit={(e) => {
            submitHandler(e)
              }} className='flex flex-wrap items-center justify-between w-full'>
                  <div className='w-1/2'>
                      <div>
                         <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                         <input 
                         value={taskTitle}
                         onChange={(e) => setTaskTitle(e.target.value)}
                         className='text-sm py-1 px-2 w-4/5 outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI Design' />
                      </div>
                      <div>
                         <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                         <input 
                         value={taskDate}
                         onChange={(e) => setTaskDate(e.target.value)}
                         className='text-sm text-gray-300 py-1 px-2 w-4/5 outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
                      </div>
                      <div>
                         <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
                         <input
                         value={asignTo}
                          onChange={(e) => setAsignTo(e.target.value)}
                          className='text-sm py-1 px-2 w-4/5 outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee Name' />
                      </div>
                      <div>
                         <h3 className='text-sm text-gray-300 mb-0.5'>Catagory</h3>
                         <input
                         value={catagory}
                         onChange={(e) => setCatagory(e.target.value)}
                         className='text-sm py-1 px-2 w-4/5 outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Design, Dev, etc' />
                      </div>
                  </div>
                  <div className='w-2/5 flex flex-col items-start'>
                     <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                     <textarea 
                     value={taskDescription}
                     onChange={(e) => setTaskDescription(e.target.value)}
                     className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" cols="30" rows="10"></textarea>
                     <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm w-full mt-4 font-bold'>Create Task</button>
                  </div>
              </form>
          </div>
  )
}

export default CreateTask
