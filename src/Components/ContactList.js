import React, { useState } from "react";

const ContactList = ({ userContactForm }) => {
  const [filterTerm, setFilterTerm] = useState("");
  
  const handleChange = (e) => {
    setFilterTerm(e.target.value.toLowerCase());
  };

  const filteredData = userContactForm.filter((contact) =>
    contact.fullName.toLowerCase().includes(filterTerm)
  );

  return (
    <div className="contactList-container">
      <div>
        <input
          type="search"
          name="search-box"
          placeholder="Search for a Contact"
          className="search-box"
          value={filterTerm}
          onChange={handleChange}
        />
      </div>
      <ul>
        {filteredData.map((contact, i) => (
          <li key={i}>
            <span>{contact.fullName}</span>
            <span hidden>{contact.phoneNumber}</span>
          </li>
        ))}
      </ul>
      <p>Total contact {filteredData.length}</p>
    </div>
  );
};

export default ContactList;
