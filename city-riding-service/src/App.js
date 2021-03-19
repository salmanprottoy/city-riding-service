import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import Destination from "./components/Destination/Destination";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import NoMatch from "./components/NoMatch/NoMatch";
import Header from "./components/Header/Header";
import { createContext } from "react";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Footer from "./components/Footer/Footer";

export const UserContext = createContext();

function App() {
  const [loggerInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggerInUser, setLoggedInUser]}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/destination">
              <Header />
              <Destination />
              <Footer />
            </PrivateRoute>
            <Route path="/blog">
              <Header />
              <Blog />
              <Footer />
            </Route>
            <Route path="/contact">
              <Header />
              <Contact />
              <Footer />
            </Route>
            <Route path="/login">
              <Header />
              <Login />
              <Footer />
            </Route>
            <Route path="*">
              <Header />
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
