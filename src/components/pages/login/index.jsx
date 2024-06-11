import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./index.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const index = () => {
  const navigate = useNavigate()
  const [form ,setForm] = useState({})
  const handleChange =(event)=>{
    const {name ,value} =event.target;
    setForm({...form , [name] : value});
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    const {user , password} = form;
    console.log(user);
    if(user === "admin" && password === "123"){
      navigate("main")
    }else{
      alert("Failure")
    }
  }
 
  return (
    <>
    <div className="container my-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6  my-5">
          <div className="card my-5">
            <div className="card-header">
            <h1>Login</h1>
            </div>
            <div className="card-body">
            <form id='form' onSubmit={handleSubmit} className='gap-2'>
            <TextField fullWidth label="USERNAME" name='user' onChange={handleChange} id="fullWidth" className='my-2' />
            <TextField fullWidth label="Password" name='password' onChange={handleChange} id="fullHeight" className='my-2' />
          </form>
            </div>
            <div className="card-footer d-flex justify-content-center">
            <Button type='submit' form='form' className='px-5 py-2' variant="contained">Login</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default index;