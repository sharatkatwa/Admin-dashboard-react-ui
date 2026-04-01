import { Routes,Route } from "react-router"
import Analytics from "../screens/Analytics"
import Ecommerce from "../screens/Ecommerce"
import Profile from "../screens/Profile"
import Invoice from "../screens/Invoice"
import Login from '../screens/auth/Login'
import Signup from '../screens/auth/Signup'
import NotFound from "../screens/auth/NotFound"
import ResetPassword from "../screens/auth/ResetPassword"
import Tasks from "../screens/Tasks"
import Calendar from "../screens/Calendar"


const AppRoutes = () => {
  return (
        <Routes>
            <Route path="/" element={<Analytics/>}/>
            <Route path="/Ecommerce" element={<Ecommerce/>}/>
            <Route path="/Profile" element={<Profile/>}/>
            <Route path="/invoice" element={<Invoice/>}/>
            <Route path="/Tasks" element={<Tasks/>}/>
            <Route path="/Calendar" element={<Calendar/>}/>
            <Route path="/Auth" >
                <Route index element={<Login/>}/>
                <Route path='Signup' element={<Signup/>}/>
                <Route path='ResetPassword' element={<ResetPassword/>}/>
            </Route>
            <Route path="/*" element={<NotFound/>}/>
            
        </Routes>
        
  )
}

export default AppRoutes
