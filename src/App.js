import Home from "./pages/Home";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom"
import Signin from "./pages/Signin";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="signup" element={<Signup />}/> 
      <Route path="signin" element={<Signin />}/>
      <Route path ="/" element={<PrivateRoute> <Home/> </PrivateRoute>}/>
    </Routes>
  );
}

export default App;