import './../assets/styles/contactus.css'
import mycon1 from './../assets/images/picture1.svg'
import mycon2 from './../assets/images/picture2.svg'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';



const ContactUs = () => {
    const form = useRef();
    
    const sendEmail = (e) => {
      e.preventDefault();
      
      emailjs
      .sendForm('service_g1k0y8n', 'template_8ej6kju', form.current, {
        publicKey: 'XzhMGsjS-ZX559PiW',
        
      })
      .then(
        () => {
          // toast.success("message sent to Az")
          toast.success("message sent to Azeezat")
          console.log('SUCCESS!');
        },
        (error) => {
          toast.error("error message")
          console.log('FAILED...', error.text);
        },
      );
  };
  
  return (
    
    <div className='contact'>
      <div>
        <img src={mycon2} alt="img"  width= "400px" height= "200px"/>
        
      </div>
      <div className='contactus'>
         {/* <h1>Contact us</h1>
      <label htmlFor="">Name:</label>
      <input type="text" name="" id="" placeholder='Name' /> <br />
      <label htmlFor=""> Email:</label>
      <input type="text" name="" id="" placeholder='Email' /> <br />
      <label htmlFor="">Phone number:</label>
      <input type="text" placeholder='Phonenumber'/>
       <textarea name="" id="" placeholder='write your comment here'></textarea>

      <h2>follow us on social media</h2>
      <a href="">Instagram</a>
      <a href="">Facebook</a>
      <a href="">Whatsapp</a>
      <a href="">Email</a> */}
        <form ref={form} onSubmit={sendEmail}>
      <label htmlFor='name'>Full Name</label>
      <input type="text" name="from_name" className='field' id='name' required placeholder='input your name'/> <br />
      <label htmlFor='email'>Email</label>
      <input type="email" 
      name="user_email"
      className='field' required placeholder='input@gmail.com' /> <br />
      <label htmlFor="interest">What are you interested in</label>
      <select name="interest" id="interest">
        <option value="web dev">Web Development</option>
        <option value="training">Training</option>
        <option value="frontend">Frontend</option>
        <option value="other">Other</option>
      </select>
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send"  />
    </form>
      </div>

      

      <div>
        <img src={mycon1} alt=""  width= "400px" height= "200px"/>
      </div>
      
    </div>

    
  );
}

export default ContactUs
