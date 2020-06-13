import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.scss';
import MainPage from "./pages/MainPage/MainPage";
import PrivacyPage from "./pages/PrivacyPage/PrivacyPage";

function App() {
    return (
        <div className={"app"}>
            <Router>
                <Switch>
                    <Route path={"/"} exact>
                        <MainPage/>
                    </Route>
                    <Route path={"/privacy"}>
                        <PrivacyPage/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
