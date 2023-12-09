import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";

// import { createBrowserRouter ,RouterProvider} from "react-router-dom";


// const classNameFunc = ({ isActive }) => (isActive ? "active" : "");

const NavigationBar=(props)=>{
  
  
  
    return(<Fragment>
      <div >
      <NavLink to="/">Home</NavLink>
      <NavLink to="/admissions">Appointment</NavLink>
      <NavLink to="/faculty">Shops</NavLink>
      <NavLink to="/about">Abou Us</NavLink>
    </div>

    
  
  
  </Fragment>)
}
export default NavigationBar