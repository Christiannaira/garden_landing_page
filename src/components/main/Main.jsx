import "./main.css";
import { Hero, Login, Signup } from "../imports";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Main = () => {
   return (
      <div>
         <Router>
            <Routes>
               <Route path="/" element={<Hero />} />
               <Route path="/login" element={<Login />} />
               <Route path="/signup" element={<Signup />} />

            </Routes>
         </Router>
      </div>
   );
};

export default Main;
