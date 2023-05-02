import React, { useState } from 'react'

import '../css/Register.css'
import { useNavigate,NavLink } from 'react-router-dom';

function Register() {
  const Navigate = useNavigate()
  const host = "http://localhost:8000";
  const [credentials, setcredentials] = useState({ name: "", email: "", password: "" })

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
   
  }



  const handleSubmit = async (e)=>{
    e.preventDefault()
    const {name, email, password} = credentials
      const response = await fetch(`${host}/api/auth/createuser`,{
          method:'POST',
          headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password}),
      })
      const data = await response.json()
      console.log(data)
      if(data.success){
        localStorage.setItem('toke',data.Authtoken)
        Navigate('/login')
      }else{
        console.log("error")
      }
  }

  return (
    <>
     
      <div className='bodystructure'>
        <div className="containers">
          <div className="title">Registration</div>
          <div className="content">
            <form onSubmit={handleSubmit}>
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Full Name</span>
                  <input type="text" placeholder="Enter your name" name="name" id="name"  onChange={onChange} minLength={5} required />
                </div>

                <div className="input-box">
                  <span className="details">Email</span>
                  <input type="email" placeholder="Enter your email" name="email" id="email"  onChange={onChange} minLength={5} required />
                </div>

                <div className="input-box">
                  <span className="details">Password</span>
                  <input type="password" placeholder="Enter your password" name="password" id="password" value={credentials.password} onChange={onChange} minLength={5} required />
                </div>
              </div>
                <NavLink to='/login' type="button" className="mx-3">Login</NavLink>
              {/* <div className="gender-details">
          <input type="radio" name="gender" id="dot-1"/>
          <input type="radio" name="gender" id="dot-2"/>
          <input type="radio" name="gender" id="dot-3"/>
          <span className="gender-title">Gender</span>
          <div className="category">
            <label htmlFor="dot-1">
            <span className="dot one"></span>
            <span className="gender">Male</span>
          </label>
          <label htmlFor="dot-2">
            <span className="dot two"></span>
            <span className="gender">Female</span>
          </label>
          <label htmlFor="dot-3">
            <span className="dot three"></span>
            <span className="gender">Prefer not to say</span>
            </label>
          </div>
        </div> */}
              <div className="button">
                <input type="submit" />
              </div>
            </form>
          </div>
        </div>

      </div>
    </>
  )
}

export default Register
