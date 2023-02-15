import React from "react";

function Planeteer({planeteer}) {
  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={planeteer.pictureUrl}
          alt={planeteer.name}
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">{planeteer.name}</div>
          <p className="card__text">{planeteer.bio}</p>
          <div className="card__detail">
            <p>{planeteer.twitter}</p>
            <p>
              {planeteer.fromUSA ? "USA-based" : "Working oversees"}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
