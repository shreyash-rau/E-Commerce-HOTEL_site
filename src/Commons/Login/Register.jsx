import React, { useState } from 'react';

import Headtitle from "../../Components/HeadTitle/Headtitle"



function Register() {

    const [fname, setFname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [comPassword, setComPassword] = useState("");

    // to store all the values of input filed we create one empty state;
    const [allValue, setAllValue] = useState([])

    const submitForm = (e) => {
        e.preventDefault();
        const newValue = { fname, email, password, comPassword }
        setAllValue([...allValue, newValue])

        // after clicking on submit btn the feild should be empty so we do this

        setFname("")
        setEmail("")
        setPassword("")
        setComPassword("")
    }

    return (
        <>
            <Headtitle /> <br />
            <section className="forms top">
                <div className="conatainer">
                    <div className="sign-box">
                        <p>Don't have an account? Create your account, it takes less than a minute.</p>
                        <form onSubmit={submitForm}>
                            <input type="fname" name="name" placeholder='Enter Your Name' value={fname} onChange={(e) => setFname(e.target.value)} required />
                            <input type="email" name="email" placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} required />

                            <input type="password" name="password" placeholder='Enter Your Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <input type="password" name="password" placeholder='Confirm Password' value={comPassword} onChange={(e) => setComPassword(e.target.value)} required />

                            <button type='submit' className='primary-btn'>Submit</button>

                        </form>
                    </div>
                </div>
            </section>


            <section className="show-data">
                {allValue.map((value) => {
                    const { fname, email, password, comPassword } = value
                    return (
                        <div className="sign-box">
                            <h1>Send Successfully</h1><hr /> &nbsp;
                            <h3>First Name : <span>{fname}</span> </h3>
                            <h3>E-mail : <span>{email}</span></h3>
                            <h3>Password  : <span>{password}</span></h3>
                            <h3>Confirm Password : <span>{comPassword}</span></h3>
                        </div>
                    )
                })}

            </section>



        </>
    )
}

export default Register;