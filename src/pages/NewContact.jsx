import React, { useState } from "react";
import { Link } from "react-router-dom";

export const NewContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const Submit = (event) => {
    event.preventDefault();
  };

  const CreateNewContact = () => {
    if (
      name.trim() !== "" &&
      email.trim() !== "" &&
      phone.trim() !== "" &&
      address.trim() !== ""
    ) {
      fetch("https://playground.4geeks.com/contact/agendas/andres/contacts", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          phone: phone,
          email: email,
          address: address,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (!res.ok) throw Error(res.statusText);
          return res.json();
        })
        .then(
          (response) => console.log("Success:", response),
          alert("Contact created successfully")
        )
        .then(() => setAddress(""), setEmail(""), setName(""), setPhone(""))
        .catch((error) => console.error(error));
    }
  };

  return (
    <>
      <form className="container mt-3" onSubmit={Submit}>
        <h1 className=" text-center mb-3">Add new contact</h1>
        <div className="mb-3 col-7 ms-auto me-auto">
          <label for="exampleInputEmail1" className="form-label">
            Full Name :
          </label>
          <input
            type="text"
            className="form-control"
            id="fullname"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            required
          />
        </div>
        <div className="mb-3 col-7 ms-auto me-auto">
          <label for="email" className="form-label">
            Email :
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            required
          />
        </div>
        <div className="mb-3 col-7 ms-auto me-auto">
          <label for="phonenumber" className="form-label">
            Phone :
          </label>
          <input
            type="tel"
            className="form-control"
            id="phonenumber"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            value={phone}
            required
          />
        </div>
        <div className="mb-3 col-7 ms-auto me-auto">
          <label for="address" className="form-label">
            Address :
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            value={address}
            required
          />
        </div>
        <div className="col-7 ms-auto me-auto">
          <button
            type="submit"
            className="btn btn-success"
            onClick={CreateNewContact}
          >
            Add Contact
          </button>
          <Link to="/agenda">
            <p className="mt-2">Return to Contacts</p>
          </Link>
        </div>
      </form>
    </>
  );
};
