import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Auth/Dashboard";
import CardItem from "./pages/Auth/CardItem";
import Profile from "./pages/Auth/Profile";
import PrivateRoute from "./components/PrivateRoute";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/About";
import Contact from "./pages/Contact";
import DestinationDetail from "./pages/Auth/DestinationDetail.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/:name"
          element={
            <PrivateRoute>
              <CardItem />
            </PrivateRoute>
          }
        />
        <Route
          path="/detail/:title"
          element={
            <PrivateRoute>
              <DestinationDetail />
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
  );
}

export default App;
