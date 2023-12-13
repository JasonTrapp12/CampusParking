import React,  {useState} from "react";
import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";
import { getDatabase } from "firebase/database";
import Auth from "./components/Auth";
import ReportForm from "./components/ReportForm";
import Cookies from 'universal-cookie';
import firebase from "firebase/compat/app";

const cookies = new Cookies()


function ParkingChat() {

    const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));

    if (!isAuth){
        return (
            <div>
             <Auth props={setIsAuth}></Auth>
            </div>
        );
    }
    return(
        <div>
            <ReportForm></ReportForm>
        </div>   
    );
}


  export default ParkingChat;
  