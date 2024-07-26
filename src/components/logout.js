import react from 'react';
import { session } from "react-session";

const Logout=()=>{
    alert("Continew to log out")
    sessionStorage.removeItem('name');


}
export default Logout;