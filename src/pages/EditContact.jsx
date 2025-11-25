import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const EditContact = (props) => {
  const { store } = useGlobalReducer();
  const { ContactId } = useParams();
  const singleContact = store.contacts.find(
    (contact) => contact.id === parseInt(ContactId)
  );

  const [contact, setContact] = useState({
    name: singleContact.name,
    phone: singleContact.phone,
    email: singleContact.email,
    address: singleContact.address,
    id: singleContact.id,
  });

  const Submit = (event) => {
    event.preventDefault();
  };

  const HandleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const EditExistingContact = () => {
    if (
      contact.name.trim() !== "" &&
      contact.email.trim() !== "" &&
      contact.phone.trim() !== "" &&
      contact.address.trim() !== ""
    ) {
      fetch(
        `https://playground.4geeks.com/contact/agendas/andres/contacts/${contact.id}`,
        {
          method: "PUT",
          body: JSON.stringify(contact),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          if (!res.ok) throw Error(res.statusText);
          return res;
        })
        .then(
          (response) => console.log("Success:", response),
          alert("Contact edited successfully")
        )
        .catch((error) => console.error(error));
    }
  };

  return (
    <>
      <form className="container mt-3" onSubmit={Submit}>
        <h1 className=" text-center mb-3">Edit Contact</h1>
        <div className="mb-3 col-7 ms-auto me-auto">
          <label for="exampleInputEmail1" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="fullname"
            onChange={HandleChange}
            value={contact.name}
            placeholder="Full name"
            required
          />
        </div>
        <div className="mb-3 col-7 ms-auto me-auto">
          <label for="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            onChange={HandleChange}
            value={contact.email}
            placeholder="Enter email"
            required
          />
        </div>
        <div className="mb-3 col-7 ms-auto me-auto">
          <label for="phonenumber" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            className="form-control"
            id="phonenumber"
            onChange={HandleChange}
            value={contact.phone}
            placeholder="Enter Phone number"
            required
          />
        </div>
        <div className="mb-3 col-7 ms-auto me-auto">
          <label for="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            name="address"
            className="form-control"
            id="address"
            onChange={HandleChange}
            value={contact.address}
            placeholder="Enter address"
            required
          />
        </div>
        <div className="col-7 ms-auto me-auto">
          <button
            type="submit"
            className="btn btn-primary col-12"
            onClick={EditExistingContact}
          >
            Save
          </button>
          <Link to="/">
            <p className="mt-2">Return to Contacts</p>
          </Link>
        </div>
      </form>
    </>
  );
};
