import React, { useContext } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import "./Layout.css";
const Layout = () => {
  return (
    <div className="layout">
      <div className="Navbar">
        <Navbar/>
      </div>
      <div className="content">
        <Outlet/>
      </div>
    </div>
  )
}


const RequireAuth = () => {

  const {currentUser} = useContext(AuthContext)


  return !currentUser ?
   ( <Navigate to="/login" /> ) 
   : (
    <div className="layout">
      <div className="Navbar">
        <Navbar/>
      </div>
      <div className="content">
        <Outlet/>
      </div>
    </div>
    )
  
};

export {Layout, RequireAuth};
