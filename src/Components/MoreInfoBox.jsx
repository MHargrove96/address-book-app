import React, { useState }  from "react";



import '../styles/MoreInfoBox.css'


function MoreInfoBox(props) {
   console.log(props)
   const {
       phone,
       name,
       onClose,
       email,
       Age,
   } = props

    return (
    <div className="modal">
      <div className="modalContent">
        <header className="modalHeader">
          <h4 className="modalTitle">{name}</h4>
        </header>
        <main className="modalBody">
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <p>Age: {Age}</p>
            <p></p>
            <p></p>
        </main>
        <footer className="modalFooter">
          <button className="modalClose" onClick={onClose} >Close</button>
        </footer>
      </div>
    </div>
  );
}

export default MoreInfoBox;
