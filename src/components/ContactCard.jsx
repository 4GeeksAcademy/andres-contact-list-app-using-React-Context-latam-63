import React from "react";

export const ContactCard = ({item}) => {
  return (
    <>
      <li key={item.id} className="list-group-item contact mt-0">
        <div
          className="card mb-0 ms-auto me-auto text-bg-dark"
          style={{ maxWidth: "100%" }}
        >
          <div className="row g-0">
            <div className="col-md-2">
              <img
                src="https://bestfriends.org/sites/default/files/styles/hero_mobile/public/hero-dash/Asana3808_Dashboard_Standard.jpg?h=ebad9ecf&itok=cWevo33k"
                className="img-fluid rounded-circle profile-pic object-fit-cover p-3"
                alt="profile picture"
                style={{
                  height: "200px",
                  width: "200px",
                  aspectRatio: "1/1",
                }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body p-4 mt-3">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                  <i className="fa-solid fa-location-dot"></i> {item.address}
                  <br className="mb-1"></br>
                  <i className="fa-solid fa-phone"></i> {item.phone}
                  <br className="mb-1"></br>
                  <i className="fa-solid fa-envelope"></i> {item.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
