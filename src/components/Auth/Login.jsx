import React, { useState } from 'react'

const Login = ({handleLogin}) => {

// console.log(handleLogin)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    
    // console.log('Email is ', email);
    // console.log('Password is ', password);
    handleLogin(email, password)  
    setEmail("");
    setPassword("");
  }



  return (
      <div className='flex h-screen w-screen items-center justify-center'>
          <div className='border-2 border-emerald-600 p-20 rounded-xl'>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className='flex flex-col items-center justify-center'>
             <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required className=' font-medium border-2 border-emerald-600 py-4 px-5 rounded-full text-xl text-white outline-none bg-transparent placeholder:text-gray' type="email" placeholder='Enter your email' />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required className='font-medium border-2 border-emerald-600 py-4 px-5 rounded-full text-xl text-white outline-none bg-transparent placeholder:text-gray mt-3' type="password" placeholder='Enter password' />
                  <button className='active:scale-90 text-white border-none outline-none bg-emerald-600 text-xl py-3 px-5 rounded-full mt-5'>Login</button>
              </form>
          </div> 
    </div>
  )
}

export default Login