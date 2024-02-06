import React from 'react'
import { useState } from 'react'
import ContactForm from './ContactForm'
import ContactList from './ContactList'

const Form = () => {

   const[userForm,setUserForm] = useState([{
    fullName:"Rakesh Ranjan",
    phoneNumber:8986513742
   },
   {
    fullName:"Priyam kumar",
    phoneNumber:895628597
   },
   {
    fullName : "Satyam kumar",
    phoneNumber:7895681598
   },
   {
    fullName : "Tushar kumar",
    phoneNumber : 9568781525
   }
]);
return(
    <div className='contact'>
        <div className='contact-container'>
            <ContactForm userContactData={userForm} addDetails1={setUserForm}/>
            <ContactList userContactForm={userForm}/>
        </div>
    </div>
)
  
}

export default Form
