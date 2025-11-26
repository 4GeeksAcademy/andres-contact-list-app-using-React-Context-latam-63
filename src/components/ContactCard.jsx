import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const ContactCard = (props) => {
  const { store, dispatch } = useGlobalReducer();

  const CapitalizeWords = (string) => {
    return string
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <>
      <li key={props.item.id} className="list-group-item contact mt-0">
        <div className="card mb-0 ms-auto me-auto" style={{ maxWidth: "100%" }}>
          <div className="row g-0">
            <div className="col-sm-4 col-md-4 col-lg-2">
              <img
                src="https://picsum.photos/200/200"
                className="img-fluid rounded-circle profile-pic object-fit-cover p-3"
                alt="profile picture"
                style={{
                  height: "200px",
                  width: "200px",
                  aspectRatio: "1/1",
                }}
              />
            </div>
            <div className="col-md-6">
              <div className="card-body p-4 mt-3 text-secondary">
                <h5 className="card-title text-dark">
                  {CapitalizeWords(props.item.name)}
                </h5>
                <p className="card-text">
                  <i className="fa-solid fa-location-dot"></i>{" "}
                  {props.item.address}
                  <br className="mb-1"></br>
                  <i className="fa-solid fa-phone"></i> {props.item.phone}
                  <br className="mb-1"></br>
                  <i className="fa-solid fa-envelope"></i> {props.item.email}
                </p>
              </div>
            </div>
            <div className="col-1 ms-auto text-center pt-3">
              <Link to={"/edit-contact/" + props.item.id}>
                <i className="fa-solid fa-pencil me-1 edit-icon"></i>
              </Link>
            </div>
            <div className="col-1 pt-3 mb-2">
              <i
                className="fa-solid fa-trash-can delete-icon"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() =>
                  dispatch({
                    type: "set_delete_id",
                    payload: props.id,
                  })
                }
              ></i>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
