import React, { useState } from 'react';



function ContactForm() {


    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [company, setCompany] = useState("");
    const [message, setMessage] = useState("");

    // to store all the values of input filed we create one empty state;
    const [allValue, setAllValue] = useState([])

    const submitForm = (e) => {
        e.preventDefault();
        const newValue = { fname, lname, email, phone, subject, message, company }
        setAllValue([...allValue, newValue])

        // after clicking on submit btn the feild should be empty so we do this

        setFname("")
        setLname("")
        setPhone("")
        setEmail("")
        setSubject("")
        setCompany("")
        setMessage("")
    }


    return (
        <>
            {/*........ one side section of contact page */}
            <section className="contact mtop">
                <div className="conatainer flex">
                    <div className="main-content">
                        <h2>Contact form </h2>
                        <p>Fill out form below, we will get back you soon.</p>

                        {/* all filling part  */}
                        <form onSubmit={submitForm}>
                            <div className="grid1">

                                <div className="input">
                                    <span>
                                        First name <label>__</label>
                                    </span>
                                    <input type="text" name="fname" value={fname} onChange={(e) => setFname(e.target.value)} required />
                                </div>
                                <div className="input">
                                    <span>
                                        Last Name <label>__</label>
                                    </span>
                                    <input type="text" name="lname" value={lname} onChange={(e) => setLname(e.target.value)} required />
                                </div>
                                <div className="input">
                                    <span>
                                        Phone Number <label>__</label>
                                    </span>
                                    <input type="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                                </div>
                                <div className="input">
                                    <span>
                                        E-Mail <label>__</label>
                                    </span>
                                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                <div className="input">
                                    <span>
                                        Subject <label>__</label>
                                    </span>
                                    <input type="text" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
                                </div>
                                <div className="input">
                                    <span>
                                        Company Name<label>__</label>
                                    </span>
                                    <input type="text" name="company" value={company} onChange={(e) => setCompany(e.target.value)} required />
                                </div>
                            </div> <br />
                            <div className="input">
                                <span>
                                    Write Your Message <label>__</label>
                                </span>
                                <textarea cols='30' rows='10' name='message' value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
                            </div>
                            <button className='primary-btn'>Submit Now</button>
                        </form>
                        {/* end of filling part  */}

                    </div>
                    {/*........ one side section end */}

                    <div className='side-content'>
                        <h3>Visit our location</h3>
                        <p>A luxury hotel in Ganespet, Nagpur, Maharashtra - 441906, a stunning video background and minimalistic typography. </p>
                        <br />

                        <h3>Message us</h3>
                        <span>info@exampal.com</span>
                        <br />
                        <span>+01 123 456 789</span>
                        <br />

                        <div className='icon'>
                            <h3>Follow Us</h3>

                            <div className='flex_space'>
                                <i className='fab fa-facebook-f'></i>
                                <i className='fab fa-twitter'></i>
                                <i className='fab fa-linkedin'></i>
                                <i className='fab fa-instagram'></i>
                                <i className='fab fa-pinterest'></i>
                                <i className='fab fa-youtube'></i>
                            </div>
                        </div>
                    </div>

                </div>
            </section>



            <section className="show-data">
                {allValue.map((value) => {
                    const { fname, lname, email, phone, subject, message,
                        company } = value
                    return (
                        <div className="sign-box">
                            <h1>send successfully</h1><hr /> &nbsp;
                            <h3>First Name : <span>{fname}</span> </h3>
                            <h3>Last Name : <span>{lname}</span></h3>
                            <h3>Phone Number : <span>{phone}</span></h3>
                            <h3>E-mail : <span>{email}</span></h3>
                            <h3>Subject  : <span>{subject}</span></h3>
                            <h3>Your Company : <span>{company}</span></h3>
                            <h3>Your Message : <span>{message}</span></h3>
                        </div>
                    )
                })}

            </section>

        </>
    )
}

export default ContactForm;