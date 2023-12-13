import React,  {useState} from "react";
import {initializeApp} from "firebase/app"
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import Auth from "./components/Auth"
import Chat from "./components/Chat"
import Cookies from 'universal-cookie'
const cookies = new Cookies()

const app = initializeApp({
    apiKey: "AIzaSyB_DQKYgdq90qGugWRaB-QyOWC75JswAnM",
    authDomain: "rit-parking.firebaseapp.com",
    projectId: "rit-parking",
    storageBucket: "rit-parking.appspot.com",
    messagingSenderId: "837629152254",
    appId: "1:837629152254:web:f37963a3f7d0990a9eceaf",
    measurementId: "G-VP355PQC9L"
})

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();

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
            <Chat></Chat>
        </div>   
    );
}


  export default ParkingChat;
  