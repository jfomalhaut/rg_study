import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./routers/Home";
import List from "./routers/List";
import Input from "./routers/Input";
import Addr from "./routers/Addr";
import Product from "./routers/Product";
import Scroll from "./routers/Scroll";

function App() {
    return (
        <Router>
            <header>
                <Link to="/home">Home으로</Link>
                <Link to="/list">list로</Link>
                <Link to="/input">input으로</Link>
                <Link to="/addr">Addr</Link>
                <Link to="/product">Product</Link>
                <Link to="/scroll">Scroll</Link>
            </header>
            <Switch>
                <Route path="/home" render={props => <Home history={props.history}/>}/>
                <Route path="/list" component={List}/>
                <Route path="/input" component={Input}/>
                <Route path="/addr" component={Addr}/>
                <Route path="/product/:type" component={Product}/>
                <Route path="/scroll" component={Scroll}/>
            </Switch>
        </Router>
    );
}

export default App;