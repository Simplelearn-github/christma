import React, { useState } from 'react'

export const Registration = () => {
    const[data,setData]=useState({
        name:'',
        password:''
    })
    const changeHandler=e=>{
        setData({...data,[e.target.name]:e.target.value
        })
    }
    const SubmitHandler=e=>{
        e.preventDefault();
       if(data.name==""){
        alert("please enter Name")

       }else{
        console.log(data);
       }
       
    }
  return (
    <div className='Welcome'>
     <form onSubmit={SubmitHandler}>
        <label>Name</label><br/>
        <input type="text" name="name" onChange={changeHandler}/><br/>
        <label>Password</label><br/>
        <input type="text" name="password" onChange={changeHandler}/>
        <br/><br/>
        <input type="submit" value="Login" />
        <center>
            <h1 >Hello {data.name} Welcome to Naveen's Website</h1>
        </center>
     </form>






    </div>
  )
}