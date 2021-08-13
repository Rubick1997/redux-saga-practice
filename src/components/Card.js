import React from "react";

const Card = ({ user }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{user.company.name}</h6>
        <p className="card-text"> {user.company.catchPhrase}</p>
      </div>
    </div>
  );
};

export default Card;
