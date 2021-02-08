import React, {useState} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import List from "./List";
import Input from "./Input";
import Plus from "./calculator/Plus";
import Minus from "./calculator/Minus";
import Multiply from "./calculator/Multiply";
import Divide from "./calculator/Divide";
import Calculator from "./calculator/Calculator";

const Home = ({test}) => {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    };
    const decrease = () => {
        setCount(count - 1);
    };

    return (
        // <div>
        //     <button>+</button>
        //     <button>-</button>
        //     <button>x</button>
        //     <button>/</button>
        //     <h1>Count: {count}</h1>
        //     <button onClick={increase}>+</button>
        //     <button onClick={decrease}>-</button>
        // </div>
        <Router>
            <div>계산기 이동탭</div>
            <header>
                <ul>
                    <li><Link to="/home/calculator/plus">+</Link></li>
                    <li><Link to="/home/calculator/minus">-</Link></li>
                    <li><Link to="/home/calculator/multiply">*</Link></li>
                    <li><Link to="/home/calculator/divide">/</Link></li>
                </ul>
            </header>
            <Switch>
                <Route path="/home/calculator/:operator" component={Calculator}/>
            </Switch>
        </Router>
    );
};

export default Home;