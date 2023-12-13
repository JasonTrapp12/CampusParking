import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const LotDropDown = ({ updateReportData }) => {
    return (
        <DropdownButton id="dropdown-basic-button" title="Choose a lot" variant="secondary">
            <Dropdown.Item onClick={() => updateReportData('A')}>A Lot</Dropdown.Item>
            <Dropdown.Item onClick={() => updateReportData('B')}>B Lot</Dropdown.Item>
            <Dropdown.Item onClick={() => updateReportData('C')}>C Lot</Dropdown.Item>
            <Dropdown.Item onClick={() => updateReportData('D')}>D Lot</Dropdown.Item>
            <Dropdown.Item onClick={() => updateReportData('E')}>E Lot</Dropdown.Item>
            <Dropdown.Item onClick={() => updateReportData('F')}>F Lot</Dropdown.Item>
            <Dropdown.Item onClick={() => updateReportData('G')}>G Lot</Dropdown.Item>
            <Dropdown.Item onClick={() => updateReportData('H')}>H Lot</Dropdown.Item>
            <Dropdown.Item onClick={() => updateReportData('J')}>J Lot</Dropdown.Item>
            <Dropdown.Item onClick={() => updateReportData('K')}>K Lot</Dropdown.Item>
            <Dropdown.Item onClick={() => updateReportData('L')}>L Lot</Dropdown.Item>
            <Dropdown.Item onClick={() => updateReportData('M')}>M Lot</Dropdown.Item>
            <Dropdown.Item onClick={() => updateReportData('N')}>N Lot</Dropdown.Item>
            <Dropdown.Item onClick={() => updateReportData('R')}>R Lot</Dropdown.Item>
            <Dropdown.Item onClick={() => updateReportData('S')}>S Lot</Dropdown.Item>
            <Dropdown.Item onClick={() => updateReportData('T')}>T Lot</Dropdown.Item>
        </DropdownButton>
    );
}

export default LotDropDown;
