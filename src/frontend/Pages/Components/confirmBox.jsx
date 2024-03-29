// ConfirmationBox.js
import React from 'react';
import '../../Styles/Components/confirmBox.css';

const ConfirmationBox = ({ isOpen, message, onConfirm, onCancel }) => {
  return (
    <div className={`confirmation-box ${isOpen ? 'open' : ''}`}>
      <div className="confirmation-box-content">
      <span className="close" onClick={onCancel}>&times;</span>
        <p>{message}</p>
        <div className="confirm-boxButton-contaienr">
        <button onClick={onConfirm}>Yes</button>
        <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationBox;
