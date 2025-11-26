import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { ContactCard } from "../components/ContactCard";

export const Agenda = () => {
  const { store, dispatch } = useGlobalReducer();
  const Api_URL = "https://playground.4geeks.com/contact";

  const GetAgenda = () => {
    fetch(Api_URL + "/agendas/andres")
      .then((resp) => {
        if (!resp.ok) {
          CreateAgenda();
        }
        return resp;
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const CreateAgenda = () => {
    fetch(Api_URL + "/agendas/andres", {
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .catch((error) => {
        console.log("Looks like there was a problem: \n", error);
      });
  };

  const DisplayAgenda = () => {
    fetch(Api_URL + "/agendas/andres/contacts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch({
          type: "getcontacts",
          payload: data.contacts,
        });
      })
      .catch((error) => {
        console.log("Looks like there was a problem: \n", error);
      });
  };
  const DeleteContact = (id) => {
    fetch(
      `https://playground.4geeks.com/contact/agendas/andres/contacts/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((resp) => {
        if (!resp.ok) {
          throw Error(resp.statusText);
        }
        return resp;
      })
      .then(() => {
        alert("Contact deleted successfully");
        DisplayAgenda();
      })
      .catch((error) => {
        console.log("Looks like there was a problem: \n", error);
      });
  };

  useEffect(() => {
    GetAgenda();
    setTimeout(DisplayAgenda(), 5000);
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="text-center mt-3">Contacts</h1>
        <div className="row d-flex">
          <div className="col-md-4 ms-auto text-end">
            <Link to="/new-contact">
              <button type="button" className="btn btn-success me-3 mt-5">
                Create new contact
              </button>
            </Link>
          </div>
        </div>
        <ul className="list-group list-group-flush col-md-12">
          {store.contacts.map((item) => {
            return <ContactCard item={item} delete={DeleteContact} />;
          })}
        </ul>
      </div>
    </>
  );
};
