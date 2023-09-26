import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Auth from "./pages/auth/Auth.jsx";
import Tracker from "./pages/Tracker/Tracker";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import { login } from "./container/TrackerSlice/TrackerSlice";
import ProRoute from "./pages/auth/ProtectRoute";
import SignUp from "./pages/auth/SignUp";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (current) => {
      if (current) {
        dispatch(login(current));
        localStorage.setItem("user", JSON.stringify(current));
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/signUp" element={<SignUp />} />

          <Route
            path="/tracker"
            element={
              <ProRoute>
                <Tracker />
              </ProRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
