import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUser, setloggedInUser] = useState(null)
  const [userData,setUserData]= useContext(AuthContext)
  // console.log(authData.employeeData)


  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser','')
    // console.log(loggedInUser)
    if (loggedInUser) {
      // console.log('User logged in')
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setloggedInUser(userData.data)
    }
  },[])



  const handleLogin=(email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role:'admin'}))
      // console.log('Admin logged in')
      //  } else if (email == 'user@me.com' && password == '123') {
    } else if (userData) {
      const employee = userData.find((e) => e.email == email && e.password == password)
      if (employee) {
        setUser('employee')
        setloggedInUser(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role:'employee',data:employee}))
      }
    //  console.log('User logged in')
   }else {
    alert('Invalid email or password')
   }
  }

  // const data = useContext(AuthContext)
  // console.log(data)

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> :''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : ''}
      {user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUser} /> : null}
    </>
  )
}

export default App