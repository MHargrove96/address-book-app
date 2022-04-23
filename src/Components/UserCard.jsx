import React, { useState } from "react";

import MoreInfoBox from "./MoreInfoBox";

import "../styles/UserCard.css";

function UserCard(props) {
  const { name, picture, phone, email, Age } = props;

  const [show, setShow] = useState(false);

  return (
    <li className="ListItem">
      <button onClick={() => setShow(!show)}>
        <img id="ThumbNail" src={picture.large} alt={name.first} />
      </button>
      <h3 id="ListItemName" className="ListItemText">
        {name.first} {name.last}
      </h3>
      {show && <MoreInfoBox onClose={() => setShow(false)} show={show} name={name.first}  phone={phone} email={email} Age={Age}/>}
    </li>
  );
}

export default UserCard;
