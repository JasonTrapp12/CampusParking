import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Form from 'react-bootstrap/Form';

function ReviewModal( {name} ) {
  const [show, setShow] = useState(false);
  const [selectedTime, setSelectedTime] = useState(1);
  const [rating, setRating] = useState(0);

  const timeslots = [
    {name: '8-9AM', value: '1'},
    {name: '9-10AM', value: '2'},
    {name: '10-11AM', value: '3'},
    {name: '11-12PM', value: '4'},
    {name: '12-1PM', value: '5'},
    {name: '1-2PM', value: '6'},
    {name: '2-3PM', value: '7'},
    {name: '3-4PM', value: '8'}
  ];

  const handleTimeSelection = (time) => {
    console.log(time);
    setSelectedTime(time);
  };

  const handleRatingChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setRating(value);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function getDescription(value) {
    switch (value) {
      case 1:
        return 'Little to no cars';
      case 2:
        return 'Lot is roughly 1/3 full';
      case 3:
        return 'Lot is 1/2 full';
      case 4:
        return 'Spots are open near the back of the lot';
      case 5:
        return 'No spots available';
      default:
        return '';
    }
  }

  return (
    <>
    <button className='review-button' onClick={handleShow}>
        Review Crowding
    </button>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Review busyness of {name} </Modal.Title>
        </Modal.Header>
        <Modal.Body>Select a time and review the crowdedness of the lot:
        <h5>Select a timeslot:</h5>
        <ButtonGroup>
            {timeslots.map((time, idx) => (
                <ToggleButton
                key={idx}
                id={`timeslot-${idx}`}
                type="radio"
                variant="secondary"
                name="radio"
                value={time.name}
                checked={selectedTime === time.name}
                onChange={(e) => handleTimeSelection(e.currentTarget.value)}
                >
                {time.name}
                </ToggleButton>
            ))}
        </ButtonGroup>
            <h5>Rate crowdedness (1-5):</h5>
         <Form.Group>
            {[1, 2, 3, 4, 5].map((value) => (
              <Form.Check
                type="radio"
                label={`${value} - ${getDescription(value)}`}
                name="rating"
                value={value}
                checked={rating === value}
                onChange={handleRatingChange}
              />
            ))}
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button className='submit-button' onClick={handleClose}>
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ReviewModal;