import React from "react";
import { Link } from "react-router-dom";

const SingleContact = (props) => {
  return (
    <div className="container contact mb-3">
      <div className="row g-0">
        <div className="col-md-2">
          <div className="contact-image-container">
            <img
              src="https://www.inboundcycle.com/hubfs/layout/v3/img/email/gmail-signatures/team-01/svercheval.jpg"
              className="img"
              alt="..."
            />
          </div>
        </div>
        <div className="col-md-8">
          <div className="contact-body">
            <h5 className="contact-name">{props.full_name}</h5>
            <p className="contact-address">
              <i className="fa-solid fa-location-dot"></i> {props.address}
            </p>
            <p className="contact-phone">
              <i className="fa-solid fa-phone"></i> {props.phone}
            </p>
            <p className="contact-email">
              <small className="text-body-secondary">
                <i className="fa-solid fa-envelope"></i> {props.email}
              </small>
            </p>
          </div>
        </div>
        <div className="col-md-2">
          <Link to={`/editar/${props.id}`}>
            <button
              type="button"
              className="btn btn-light edit-button"
              onClick={props.onEdit}
            >
              <i className="fa-solid fa-pencil"></i>
            </button>
          </Link>
          <button
            type="button"
            className="btn btn-light delete-button"
            onClick={props.onDelete}
          >
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleContact;
