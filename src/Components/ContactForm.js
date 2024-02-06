import React, { useEffect, useState } from "react";

const ContactForm = ({ userContactData, addDetails1}) => {
  const [contact, setContact] = useState({
    fullName: "",
    phoneNumber: "",
  });

  useEffect(() => {
    // You might want to clear the form after adding a contact
    setContact({
      fullName: "",
      phoneNumber: "",
    });
  }, [userContactData]);

  const onUserInput = (e) => {
    // Update the contact state based on the input's name
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (contact.fullName === "" || contact.phoneNumber === "") {
      return false;
    }

    addDetails1([...userContactData, contact]);
  };

  return (
    <div className="contactForm-container">
      <h1>Add a Contact</h1>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="text-input"
            value={contact.fullName}
            onChange={onUserInput}
            required
          />
        </div>
        <div>
          <input
            type="number"
            name="phoneNumber"
            placeholder="Phone Number"
            className="phone-input"
            value={contact.phoneNumber}
            onChange={onUserInput}
            required
          />
        </div>
        <div>
          <button type="submit" className="add-btn">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
