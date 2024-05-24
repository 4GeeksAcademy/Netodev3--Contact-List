import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const SingleForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [editContact, setEditContact] = useState({});

  const { id } = useParams();
  const url = `https://playground.4geeks.com/apis/fake/contact/${id}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setEditContact(data);
        setFullName(data.full_name || "");
        setEmail(data.email || "");
        setPhone(data.phone || "");
        setAddress(data.address || "");
      })
      .catch((error) => error);
  }, [url]);

  const saveContact = () => {
    const updatedContact = {
      full_name: fullName,
      image: "",
      address: address,
      phone: phone,
      email: email,
      agenda_slug: "Netodev3",
    };

    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedContact),
    })
      .then((response) => response.json())
      .then((data) => {
        setEditContact(data);
      })
      .catch((error) => error);
  };

  return (
    <div className="container form-body">
      <h1 className="title">Edit Contact</h1>
      <div className="input-group">
        <p>Full name</p>
        <input
          type="text"
          className="full-name"
          placeholder="Full name"
          aria-label="Full name"
          aria-describedby="basic-addon1"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <p>E-mail</p>
        <input
          type="text"
          className="email"
          placeholder="Enter e-mail"
          aria-label="Enter e-mail"
          aria-describedby="basic-addon1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>Phone</p>
        <input
          type="text"
          className="phone"
          placeholder="Enter phone"
          aria-label="Enter phone"
          aria-describedby="basic-addon1"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <p>Address</p>
        <input
          type="text"
          className="address"
          placeholder="Enter address"
          aria-label="Enter address"
          aria-describedby="basic-addon1"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <Link to="/contactos">
        <button type="button" className="btn btn-primary" onClick={saveContact}>
          Save
        </button>
      </Link>
      <Link to="/contactos">
        <p>Get back to contacts</p>
      </Link>
    </div>
  );
};

export default SingleForm;
