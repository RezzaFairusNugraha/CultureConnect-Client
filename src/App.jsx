import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Auth/Dashboard";
import Profile from "./pages/Auth/Profile";
import PrivateRoute from "./components/PrivateRoute";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/About";
import Contact from "./pages/Contact";
import SingleDestination from "./pages/Auth/SingleDestination";
import UserFormData from "./pages/Auth/UserFormData";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/fill-user-data"
            element={
              <PrivateRoute>
                <UserFormData />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/:id"
            element={
              <PrivateRoute>
                <SingleDestination />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
