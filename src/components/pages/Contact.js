import React, { useState } from "react";
//email validation helper function
import { validateEmail} from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({name: '', email: '', message: '',});
    //form takes name, email, and message
    const { name, email, message } = formState
    const [errorMessage, setErrorMessage] = useState('');
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value})
        if (e.target.name === 'email') {
            // validate email
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
                if (!isValid) {
                    setErrorMessage('Enter a valid email');
                } else {
                    setErrorMessage('');
                }
        } else {
            // if no value entered print error message.
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
        }
        if (e.target.name === 'message') {
        } else {
            // if no value entered print error message.
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
        }
        console.log('errorMessage', errorMessage);
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    //html for contact page
    return (
        <section className="contact-main">
            <h1 className="contact-container" id = "section-title">Contact</h1>
            <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    </div>
                <div>
                    <input className="form-input" type="text" name="name" defaultValue={name} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email Address:</label>
                </div>
                <div>
                    <input className="form-input" type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                </div>
                <div>
                    <textarea className="form-input" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                    {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
                    )}
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
};
export default Contact;