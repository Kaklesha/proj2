import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "../screens/home/Home";
import CarDetail from "../screens/home/car-detail/CarDetail";

const Router = () => {
  return <BrowserRouter>
  
  <Routes>
     <Route element={<Home />} path='/'/>
     <Route element={<div>Not founde</div>} path='*'/>
     <Route element={<CarDetail />} path='/car/:id'/>
  </Routes>

  </BrowserRouter>;
};

export default Router;