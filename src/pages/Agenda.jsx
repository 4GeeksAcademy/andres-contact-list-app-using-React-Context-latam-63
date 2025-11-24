import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { ContactCard } from "../components/ContactCard";

export const Agenda = () => {
  const [contactList, setContactList] = useState([]);
  const Api_URL = "https://playground.4geeks.com/contact";

  // const DisplayList = () => {
  //   fetch(Api_URL + "/agendas")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw Error(response.statusText);
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.log("Looks like there was a problem: \n", error);
  //     });
  // };

  const CreateAgenda = () => {
    fetch(Api_URL + "/agendas/andres", {
      method: "POST",
      body: JSON.stringify({ slug: "andres" }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log("Looks like there was a problem: \n", error);
      });
  };

  const CheckAgenda = () => {
    fetch(Api_URL + "/agendas/andres/contacts")
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setContactList(data.contacts);
      })
      .then(() => {
        console.log(contactList);
      })
      .catch((error) => {
        console.log("Looks like there was a problem: \n", error);
      });
  };

  useEffect(() => {
    CreateAgenda();
    // DisplayList();
    CheckAgenda();
  }, []);

  return (
    <>
      <div className="container">
        <div className="col-12 text-center"><h1>Contacts</h1></div>
        <div className="row d-flex">
          <div className="col-md-4 ms-auto text-end  mt-3">
            <Link to="/new-contact">
              <button type="button" className="btn btn-success me-3">
                Create new contact
              </button>
            </Link>
          </div>
        </div>
        <ul className="list-group list-group-flush col-md-12">
          {contactList.map((item) => {
            return <ContactCard item={item} />;
          })}
        </ul>
      </div>
    </>
  );
};
