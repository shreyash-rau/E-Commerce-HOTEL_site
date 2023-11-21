import React, { useState } from 'react'
import Headtitle from '../../Components/HeadTitle/Headtitle';
import { Link } from 'react-router-dom';

function Sign_in() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  

    // to store all the values of input filed we create one empty state;
    const [allValue, setAllValue] = useState([])

    const submitForm = (e) => {
        e.preventDefault();
        const newValue = { email, password }
        setAllValue([...allValue, newValue])

        // after clicking on submit btn the feild should be empty so we do this

       
        setEmail("")
        setPassword("")
        
    }

  return (
    <>
    <Headtitle/> <br/>
    <section className="forms top">
        <div className="conatainer">
            <div className="sign-box">
                <p>Enter your e-mail and password below to log in to 
                    your account and use the benefits of our website.</p>
            
            <form onSubmit={submitForm}>
            <input type="email" name="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" name="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
            
            <div className="flex_space">
                <div className="flex">
                    <input type = "checkbox" />
                    <label> Remember Me</label>
                </div>
                <div className="flex">
                    <span>I Forgot My Password</span>
                </div>
                
            </div>
            <button type='submit' className='primary-btn'>Submit</button>
            
            <p>Don't Have Account ? <Link to="/register">Sign Up</Link></p>

            </form>
            </div>
        </div>
    </section>

    <section className="show-data">
                {allValue.map((value) => {
                    const {email, password } = value
                    return (
                        <div className="sign-box">
                            <h1>Send Successfully</h1><hr /> &nbsp;
                            <h3>E-mail : <span>{email}</span></h3>
                            <h3>Password  : <span>{password}</span></h3>
                        </div>
                    )
                })}

            </section>


    </>
  )
}

export default Sign_in;