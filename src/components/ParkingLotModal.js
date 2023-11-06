import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReviewModal from './ReviewModal';

function ParkingLotModal({image, name, description}) {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function getReviews(){
    fetch(`https://campusparkingapi.onrender.com/reviews/${name}`)
      .then(response => response.json())
      .then(data => setData(data));

      console.log(Object.entries(data));
  }

  function viewInfo(){
    handleShow();
    getReviews();
  }

  function hideModal(){
    handleClose();
  }

  return (
    <>
      <button className="open-modal-button" onClick={viewInfo}>
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
              {Object.entries(data).map((item) => (
                <ul key={item[0]}>
                  <div className='time-review'>
                    <h5>{ item[0]}:&nbsp;&nbsp;</h5>
                    {item[1]}/5
                  </div>
                 
                </ul>
              ))}

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <ReviewModal name={name} funct={hideModal}/>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ParkingLotModal;