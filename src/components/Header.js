import React from 'react'
import {NavLink} from 'react-router-dom';

export default () => (
    <div className="App-header">
        <NavLink exact={true} to="/">home</NavLink>
        <NavLink to="/about">about</NavLink>
    </div>
)