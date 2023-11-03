import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReviewModal from './ReviewModal';

function ParkingLotModal({image, name, description}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="open-modal-button" onClick={handleShow}>
        View Info
      </button>
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>
            Description: 
            </h4>
            {description} 
            <h4>
            Crowding by Hour:
            </h4>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <ReviewModal name={name}/>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ParkingLotModal;