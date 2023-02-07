import React from 'react'
import { useLocation } from 'react-router-dom'

const Userdata = () => {
    const {state} = useLocation();
    const {username, age, date,phone,password} = state.username;
  return (
 
          <div  className='showDataStyle'>
            <p>{username}</p>
            <p>{age}</p>
            <p>{date}</p>
            <p>{phone}</p>
            <p>{password}</p>
            </div>
 
  );
}

export default Userdata