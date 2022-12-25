import React from 'react';
import { Link } from 'react-router-dom';



export const Dashboard = () => {
    //const arr=["HOME","ABOUT","ContactUS","REGISTRATION","REACTCOURSE"];
  return (
    <div  className='dashboard'>
       <div className='image'><img src='https://www.elearninfotech.com/img/logo-primary.png'/>
        </div>
       
        <span  >HOME</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>ABOUT</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>ContactUS</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span><Link to='/Registration'>REGISTRATION</Link></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>REACTCOURSE</span>
       
     
       
        </div>
      
        
        
   

        

  )
}