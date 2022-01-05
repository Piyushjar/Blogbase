import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { CreatePost } from "./pages/CreatePost";
import Login from "./pages/Login";
import { auth } from "./firebase-config";
import { signOut } from "firebase/auth";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth);
    localStorage.clear();
    setIsAuth(false);
    window.location.pathname = "/login";
  };

  return (
    <Router>
      <nav className="topnav">
        <Link to="/">
          <a>Home</a>
        </Link>

        {!isAuth ? (
          <Link to="/login">
            <div className="topnav-right">
              <button className="log">Login</button>
            </div>
          </Link>
        ) : (
          <>
            <Link to="/createpost">
              <a>Post</a>
            </Link>
            <div className="topnav-right">
              <button classname="logout-btn" onClick={signUserOut}>
                Logout
              </button>
            </div>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />}></Route>
        <Route
          path="/createpost"
          element={<CreatePost isAuth={isAuth} />}
        ></Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
