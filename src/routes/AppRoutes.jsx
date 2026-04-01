import { Routes,Route } from "react-router"
import Analytics from "../screens/Analytics"


const AppRoutes = () => {
  return (
        <Routes>
            <Route path="/" element={<Analytics/>}></Route>
        </Routes>
        
  )
}

export default AppRoutes