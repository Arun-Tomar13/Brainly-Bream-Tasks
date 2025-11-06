import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Dashboard from "./page/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App(){
  return (
    <Router>
      <div className="app-shell h-auto">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Routes>
      </div>
    </Router>
  );
}
