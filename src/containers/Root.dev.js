import React from 'react'
import App from './App'
import DevTools from './DevTools'
import {connect} from 'react-redux'

const Root = (props)=>(
    <div>
        <App {...props}/>
        <DevTools/>
    </div>
)
const mapStateToProps = (state) => {
    console.log(state.routing)
    return ({
})};

export default connect(mapStateToProps)(Root);