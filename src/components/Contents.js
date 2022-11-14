import React from "react";
import "./Contents.css";
import location from "../location.svg";

const Contents = (props) => {
  return (
    <section>
      <img className="contents-img" src={props.imageUrl} alt="" />
      <div className="content">
        <div className="first-title">
          <img src={location} alt="" />
          <span>{props.location}</span>
          <span>
            <a href={props.googleMapsUrl} target="_blank">
              View on Google Maps
            </a>
          </span>
        </div>
        <h2>{props.title}</h2>
        <p className="date">
          {props.startDate} - {props.endDate}
        </p>
        <p>{props.description}</p>
      </div>
    </section>
  );
};

export default Contents;
