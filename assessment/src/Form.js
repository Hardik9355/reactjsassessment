import React, { useState } from 'react'
import {useNavigate } from "react-router-dom"
const Form = () => {
  const navigate = useNavigate();
  const [username,setname] = useState({
    name : "",
    age : "",
    date : "",
    phone:"",
    password:""


  }); 
  const [details,setDetails] = useState([]);
  // const [age,setAge] = useState("");
  // const [date,setDate] = useState("");
  // const [phone,setPhone] = useState("");
  // const [password,setPassword] = useState(""); 
  const handleInput =(e) => {
    const name = e.target.name;
    const value = e.target.value;

    setname({ ...username,[name]:value});
   

  }
  const handleSubmit =(e) =>{
    e.preventDefault();
    const newDetails = { ...username  }
    setDetails([...details, newDetails] )
    setname({username:"",age:"", date:"", phone:"", password:""});
    navigate ("/userdata",{
    state: {
      username,
    },
  });

  }
  return (
    <>
    <form action='' onSubmit={handleSubmit }>
      <div>        
        <label> Name </label>
        <input type ="text"  autoComplete ="off" name="name" id='username' value={username.name} onChange={handleInput}></input>
        </div>
        <div>        
        <label> Age </label>
        <input type ="number" autoComplete="off" name="age" id='age' value={username.age} onChange={handleInput}></input>
        </div>
        <div>        
        <label> Date of Birth </label>
        <input type ="date" autoComplete="off" name="date" id='date' value={username.date} onChange={handleInput}></input>
        </div>
        <div>        
        <label> Phone Number </label>
        <input type ="number" value={username.phone} autoComplete="off" name="phone" id='number' onChange={handleInput}></input>
        <label>Password</label>
        <input type="password" autoComplete="off" value={username.password} name="password" id="password" onChange={handleInput}></input>
        <button type='submit'>Submit</button>
        </div>
    </form>
   
    </>
  )
}  

export default Form
