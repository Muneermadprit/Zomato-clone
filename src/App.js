import logo from './logo.svg';

import Home from './components/Home'
import RestorentIndiaPage from './components/restorentindiapage';
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import { Navbar } from 'react-bootstrap';
import Admin from './components/admin';
import Contry from './components/Contry_states';
import Restaurent from './components/restaurent';
import Restaurentlogin from './components/restaurentlogin';
import SuccessPopup from './components/successpopup';
import RestaurantHome from './components/resturenthome';
import FoodsuccessPopup from './components/foodregistersuccess';
import Userprofile from './components/userprofile';
import Details from './details';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<RestorentIndiaPage />} />
      <Route path="/Zomato-clone" element={<RestorentIndiaPage />} />
      <Route path="/Home/:state" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/Contry_states" element={<Contry />} />
      <Route path="/restaurent" element={<Restaurent />} />
      <Route path="/restaurentlogin" element={<Restaurentlogin />} />
      <Route path="/success" element={<SuccessPopup />} />
      <Route path="/Resturenthome" element={<RestaurantHome />} />
      <Route path="/foodsuccess" element={<FoodsuccessPopup />} />
      <Route path="/profile" element={<Userprofile />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/resturent" element={<Restaurent />} />
      <Route path="/resturentlogin" element={<Restaurentlogin />} />
    </Routes>
  </BrowserRouter>
     
  
  );
}

export default App;
