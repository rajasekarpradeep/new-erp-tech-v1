import React from 'react';
import '../../styles/modal.css'

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>Close</button>
        <div className="modal-body">
          {content}
          <h4>Title</h4>
          <p>SAP allows easy and global integration of business processes by creating an efficient work environment for the users thereby reducing the possibility of errors and redundant information. SAP has immense capabilities to deliver data-driven solutions for various operations, but SAP implementation demands a high-end accuracy and acuteness to yield maximum benefits.</p>
          {content}
          {content}

        </div>
      </div>
    </div>
  );
};

export default Modal;
