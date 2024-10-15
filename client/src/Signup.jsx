import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom' 

function Signup(){

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/signup',{name,email,password})
        .then(result => {console.log(result)
        navigate('/')
        })
        .catch(err => console.error(err))
    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100' >
      <div className='bg-white p-3 rounded w-25'>
        <h2>Register form</h2>
        <form onSubmit={handleSubmit} >
            <div className='mb-3'>
                <label htmlFor="email">
                    <strong>Name</strong>
                </label>
                <input type="text" 
                placeholder='Enter Name' 
                autoComplete='off'
                name='email'
                className='form-control rounded-0'
                required
                onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <div className='mb-3'>
                <label htmlFor="email">
                    <strong>Email</strong>
                </label>
                <input type="email" 
                placeholder='Enter Email' 
                autoComplete='off'
                name='email'
                className='form-control rounded-0'
                required
                onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
            <div className='mb-3'>
                <label htmlFor="email">
                    <strong>Password</strong>
                </label>
                <input type="password" 
                placeholder='Enter Password' 
                autoComplete='off'
                name='password'
                className='form-control rounded-0'
                required
                onChange={(e)=>setPassword(e.target.value)}
                />
            </div>
            <button type='submit' className='btn btn-primary rounded-0 w-100 mb-3'>Submit</button>
        </form>
        <p>Already have an Account<Link to='/'> Login</Link></p>
      </div>
    </div>
  )
}

export default Signup
