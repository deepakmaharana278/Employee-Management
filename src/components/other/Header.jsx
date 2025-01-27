import React, { useState } from 'react'

const Header = (props) => {


  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    // console.log(prpos.changeUser);
    props.changeUser('')
    // window.location.reload()
  }
 

 
  return (
      <div className="flex items-end justify-between">
          <h1 className='text-2xl text-white font-medium'>Hello <br /><span className='text-3xl font-semibold'>{props.data?.firstName ||'Deepak'} 😜</span></h1>
          <button onClick={logOutUser} className='active:scale-90 bg-red-600 text-white px-5 py-2 rounded-sm text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header