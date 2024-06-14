import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminLogin from "./pages/Admin/AdminLogin";
import Home from "./pages/Home";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() { 
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<ProtectedRoute element={<AdminDashboard />} />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="*" element={<Home />} />
          
        </Routes>
    </BrowserRouter>
  )
}

export default App
