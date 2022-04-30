import React from 'react';
import emailjs from '@emailjs/browser';
import Dashboard from './Dashboard';
  const Mails = () => {

      function sendEmail(e) {
          e.preventDefault();

          emailjs.sendForm('service_p149qfo','template_cugkesq',e.target,'naAHeNAq3N79Z1Fs4')
          .then(res=>{
              console.log(res);
          }).catch(err=> console.log(err));
      }

    return (
      <Dashboard>
      <div className='container_border' style={{marginTop : '50px', width : '30%', marginLeft: "540px"}}>
          <h1 style={{marginTop : '45px'}}>Notify Others</h1>
          <form className='main_content' onSubmit={sendEmail}>
              <label>User Name</label>
              <input type='text' name='user_name' className='form-control' /><br></br>

               <label>User Email</label>
              <input type='email' name='user_email' className='form-control'/><br></br>

              <label>Compose Message</label>
              <textarea name='write_something' rows='4' className='form-control'/>

              <input type='submit' value='Send' className='form-control btn btn-primary' style={{marginTop: '20px', width: '120px', border: "none"}} />
          </form>
      </div>
      </Dashboard>
    );
  }

  export default Mails;