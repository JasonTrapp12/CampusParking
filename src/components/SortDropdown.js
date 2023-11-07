import Dropdown from 'react-bootstrap/Dropdown';

function SortDropdown({onSelect}) {
  return (
    <Dropdown onSelect={onSelect}>
      <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
        Filter By
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Item eventKey="All">All</Dropdown.Item>
        <Dropdown.Item eventKey="Handicap Parking">Handicap Parking</Dropdown.Item>
        <Dropdown.Item eventKey="Motorcycle Parking">Motorcycle Parking</Dropdown.Item>
        <Dropdown.Item eventKey="General Parking">General Parking</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SortDropdown;