/*import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg icon.png'
import mail_icon from '../../assets/mail icon.png'
import call_icon from '../../assets/call icon.png'
import location_icon from '../../assets/location icon.jpeg'

const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact-col'>
        <h3> Send us a message  <img src={msg_icon}  alt='' /></h3>
        <p> Please feel free to reach out through form or find our contact information below. Your feedback, questions, and suggestions are valuable to us as we strive to provide the best quality services.</p>
      <ul>
        <li> <img src= {mail_icon} alt='' />contact.nyaymitra@gmail.com</li>
        <li> <img src= {call_icon} alt='' />+91 629785678</li>
        <li> <img src= {location_icon} alt='' />Kolkata, West Bengal </li>
      </ul>
      </div>
    <div className='contact-col'>
       { /*<form action="https://api.web3forms.com/submit" method="POST">
            <label> Your name</label>
            <input type='text' name='name' placeholder='Enter your name' required/>
            <label> Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter your mobile number' required />
            <label> Write your message here</label>
            <textarea name='message' rows={6 } placeholder='enter your message' required></textarea>
            <button type='submit' className='btn'> Submit </button>
        </form>
        <span> </span>
        <form action="https://api.web3forms.com/submit" method="POST">
    <input type="hidden" name="access_key" value="4b304f55-7335-446f-8ad1-73dfb5b81a2a" />

    <label>Your name</label>
    <input type="text" name="name" placeholder="Enter your name" required />

    <label>Phone Number</label>
    <input type="tel" name="phone" placeholder="Enter your mobile number" required />

    <label>Write your message here</label>
    <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>

    <button type="submit" className="btn">Submit</button>
</form>

    </div>
    </div>
  )
}

export default Contact */

import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg icon.png'
import mail_icon from '../../assets/mail icon.png'
import call_icon from '../../assets/call icon.png'
import location_icon from '../../assets/location icon.jpeg'

const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact-col'>
        <h3> Send us a message  <img src={msg_icon}  alt='' /></h3>
        <p> Please feel free to reach out through form or find our contact information below. Your feedback, questions, and suggestions are valuable to us as we strive to provide the best quality services.</p>
      <ul>
        <li> <img src= {mail_icon} alt='' />contact.nyaymitra@gmail.com</li>
        <li> <img src= {call_icon} alt='' />+91 629785678</li>
        <li> <img src= {location_icon} alt='' />Kolkata, West Bengal </li>
      </ul>
      </div>
    <div className='contact-col'>
       { /*<form action="https://api.web3forms.com/submit" method="POST">
            <label> Your name</label>
            <input type='text' name='name' placeholder='Enter your name' required/>
            <label> Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter your mobile number' required />
            <label> Write your message here</label>
            <textarea name='message' rows={6 } placeholder='enter your message' required></textarea>
            <button type='submit' className='btn'> Submit </button>
        </form>
        <span> </span>*/}
        <form action="https://api.web3forms.com/submit" method="POST">
    <input type="hidden" name="access_key" value="4b304f55-7335-446f-8ad1-73dfb5b81a2a" />

    <label>Your name</label>
    <input type="text" name="name" placeholder="Enter your name" required />

    <label>Phone Number</label>
    <input type="tel" name="phone" placeholder="Enter your mobile number" required />

    <label>Write your message here</label>
    <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>

    <button type="submit" className="btn">Submit</button>
</form>

    </div>
    </div>
  )
}

export default Contact;



