import logo from "./logo.PNG";
import "./App.css";
import { Button } from "reactstrap";
import style from "./Mycss.module.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateSurvey from "./components/CreateSurvey";
function App() {
   return (
      <div className="App">
         <Router>
            <Switch>
               <Route path="/create">
                  <CreateSurvey />
               </Route>
               <Route path="/take">Take Survey</Route>
               <Route path="/">
                  <img src={logo} className="App-logo" alt="logo" />
                  <Link to="/create">
                     <Button className={style.surveymainbutton}>
                        Create Survey
                     </Button>
                  </Link>
                  <Link to="/take">
                     <Button className={style.surveymainbutton}>
                        Take Survey
                     </Button>
                  </Link>
               </Route>
            </Switch>
         </Router>
      </div>
   );
}

export default App;
