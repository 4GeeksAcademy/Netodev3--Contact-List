import React, { useState, useEffect } from "react";
import SingleContact from "./SingleContact";
import { Link } from "react-router-dom";

const Contact = () => {
  const [contactInfo, setContactInfo] = useState([]);

  const urlContactList =
    "https://playground.4geeks.com/apis/fake/contact/agenda/netodev3";

  useEffect(() => {
    fetch(urlContactList)
      .then((response) => response.json())
      .then((data) => {
        setContactInfo(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const deleteContact = (id) => {
    fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        const updatedContacts = contactInfo.filter(
          (contact) => contact.id !== id
        );
        setContactInfo(updatedContacts);
      })
      .catch((err) => console.error(err));
  };

  const editContact = (id) => {
    console.log("Edit contact:", id);
  };

  return (
    <div className="container">
      <div className="add-contact-button-container">
        <Link to="/formulario">
          <button type="button" className="btn btn-success add-contact-button">
            Add new contact
          </button>
        </Link>
      </div>
      <div className="contact-list">
        {contactInfo.map((contact, index) => (
          <SingleContact
            key={index}
            id={contact.id}
            image={contact.image}
            full_name={contact.full_name}
            address={contact.address}
            phone={contact.phone}
            email={contact.email}
            onDelete={() => deleteContact(contact.id)}
            onEdit={() => editContact(contact.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Contact;
