import LotDropDown from "./LotDropdown";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import DiscordLink from "./DiscordLink";
import {auth} from "./firebase";
import { v4 as uuidv4 } from 'uuid';
import { firestore } from "./firebase"

const ReportForm = () => {

    const [lot, SetLot] = useState(null);
    const [user, SetUser] = useState(null);
    const [time, SetTime] = useState(null);
    
    function updateReportData(lot,user,time){
        SetLot(lot);
        console.log(auth.currentUser.displayName);
        SetUser(auth.currentUser.displayName ? auth.currentUser.uid : null);
        SetTime(new Date());
    }

    const submitReport = async (e) =>{
        e.preventDefault();
        const data = {
            id: uuidv4(),
            Lot: lot,
            Reporter: user,
            Time: time
        }
        try {
            const docRef = await addDoc(collection(firestore, "Reports"), data);
            console.log("Document written with ID: ", docRef.id);
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }

    return(
        <div className="report-form">
            <h1 className="report-title">Report Parking Services on Campus!</h1>
            <LotDropDown className="lot-dropdown" updateReportData={updateReportData}></LotDropDown>
            <button className="submit-report" onClick={submitReport}>Submit</button>
            <p1 className="discordp">Join us on discord to get real-time parking security updates:</p1>
            <DiscordLink className="link"></DiscordLink>
        </div>
    );
}
export default ReportForm;