import React, {Component} from 'react';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';

import Header from '../components/Header'

const Home = ()=>(
    <div>Home</div>
)
const About = ()=>(
    <div>About</div>
)

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header/>
                    <p className="App-main">
                        <Route exact={true} path="/" component={Home} />
                        <Route path="/about" component={About} />
                    </p>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
