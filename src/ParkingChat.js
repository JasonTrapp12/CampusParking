import React,  {useState} from "react";
import Auth from "./components/Auth";
import ReportForm from "./components/ReportForm";
import Cookies from 'universal-cookie';

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
  