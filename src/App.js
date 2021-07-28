import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./Container/HomePage";
import LoginPage from "./Container/LoginPage";
import SignupPage from "./Container/SignupPage";
import PrivateRoute from "./Component/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { isLoggedInUser } from "./actions";

function App() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.authenticated) {
      dispatch(isLoggedInUser());
    }
  }, []);
  
  return (
    <div className="App">
      <Router>
        {/* only logged in user can access this home route */}
        <PrivateRoute path="/" exact component={HomePage} />

        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
      </Router>
    </div>
  );
}

export default App;
