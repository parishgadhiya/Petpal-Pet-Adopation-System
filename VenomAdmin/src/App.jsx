import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import Updatecategory from './Pages/Updatecategory'
import Authlogin from "./Pages/Authlogin"
import AddCatagory from './Pages/AddCatagory'
import Viewcategory from './Pages/Viewcategory'
import Dashborad from './Pages/Dashborad'
import PendingRequests from './Pages/PendingRequests';
import AddPet from './Pages/AddPet';
import AdoptionRequests from './Pages/AdoptionRequests'
import AddProduct from './Pages/AddProduct';
import UploadProducts from './Pages/Uploadproduct';
import ViewProduct from './Pages/ViewProduct';
import UpdateProduct from './Pages/Updateproducts';
import ViewOrders from './Pages/ViewOrders';
import SearchResults from './Pages/SearchResults';
import PickupScheduling from './Pages/PickupScheduling';
import ViewReviews from './Pages/ViewReviews';
import ViewPets from './Pages/ViewPets';
import ViewNotifications from './Pages/ViewNotifications';
import ViewUsers from './Pages/ViewUsers';
import ViewChats from './Pages/ViewChats';

function App() {
  return (
    <>
      <Routes>
        {/* DEFAULT ROUTE */}
        <Route path="/" element={<Navigate to="Authlogin" />} />

        <Route path="/Authlogin" element={<Authlogin />} />
        <Route path="/dashboard" element={<Dashborad />} />
        <Route path="/addcatagory" element={<AddCatagory />} />
        <Route path="/viewcategory" element={<Viewcategory />} />
        <Route path="/updatecategory/:id" element={<Updatecategory />} />
        <Route path="/addpet" element={<AddPet />} />
        <Route path="/pendingrequests" element={< PendingRequests/>} />
        <Route path="/adoptionrequests" element={< AdoptionRequests />} />
        <Route path="/addproduct" element={< AddProduct/>} />
        <Route path="/updateproducts/:id" element={<UpdateProduct />} />
        <Route path="/uploadproduct" element={< UploadProducts/>} />
        <Route path="/viewproduct" element={< ViewProduct/>} />
        <Route path="/vieworders" element={< ViewOrders />} />
        <Route path="/search/:query" element={< SearchResults/>} />
        <Route path="/pickupscheduling" element={<PickupScheduling />} />
        <Route path="/viewreviews" element={<ViewReviews />} />
        <Route path="/viewpets" element={<ViewPets />} />
        <Route path="/viewnotifications" element={<ViewNotifications />} />
        <Route path="/viewusers" element={<ViewUsers />} />
        <Route path="/viewchats" element={<ViewChats />} />
        
      </Routes>
    </>
  )  
}

export default App
