import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, HashRouter, Route, NavLink } from 'react-router-dom';

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

const Home = () => (
    <div>home</div>
);
const About = () => (
    <div>about</div>
);
ReactDOM.render(
<BrowserRouter>
    <div>
    <NavLink exact={true} to="/"><button>home</button></NavLink >
    <NavLink to="/about"><button>about</button></NavLink>
    <Route exact={true} path="/" component={Home} />
    <Route path="/about" component={About} />
    </div>
</BrowserRouter>
    , document.getElementById('root')
)
