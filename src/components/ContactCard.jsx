import React from "react";

export const ContactCard = ({ item }) => {
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
        return resp.json();
      })
      .then(alert("Contact deleted successfully"))
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log("Looks like there was a problem: \n", error);
      });
  };

  return (
    <>
      <li key={item.id} className="list-group-item contact mt-0">
        <div className="card mb-0 ms-auto me-auto" style={{ maxWidth: "100%" }}>
          <div className="row g-0">
            <div className="col-md-2">
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
                <h5 className="card-title text-dark">{item.name}</h5>
                <p className="card-text">
                  <i className="fa-solid fa-location-dot"></i> {item.address}
                  <br className="mb-1"></br>
                  <i className="fa-solid fa-phone"></i> {item.phone}
                  <br className="mb-1"></br>
                  <i className="fa-solid fa-envelope"></i> {item.email}
                </p>
              </div>
            </div>
            <div className="col-1 ms-auto text-center pt-3">
              <i className="fa-solid fa-pencil me-1 edit-icon"></i>
            </div>
            <div className="col-1 pt-3 mb-2">
              <i
                className="fa-solid fa-trash-can delete-icon"
                onClick={() => DeleteContact(item.id)}
              ></i>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
