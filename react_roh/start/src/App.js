import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./routers/Home";
import List from "./routers/List";
import Input from "./routers/Input";


function App() {
    return (
        <Router>
            <header>
                <Link to="/home">Home으로</Link>
                <Link to="/list">list로</Link>
                <Link to="/input">input으로</Link>
            </header>
            <Switch>
                <Route path="/home" render={props => <Home history={props.history}/>}/>
                <Route path="/list" component={List}/>
                <Route path="/input" component={Input}/>
            </Switch>
        </Router>
    );
}

export default App;