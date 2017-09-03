import React, {Component} from 'react';
import {BrowserRouter, Router, Route, NavLink} from 'react-router-dom';

import Header from '../components/Header'
import {DatePicker} from 'antd';
import {connect} from 'react-redux';
import { Layout, Menu, Breadcrumb } from 'antd';
import createHistory from 'history/createBrowserHistory'
const {  Content, Footer } = Layout;

const Home = ()=>(
    <div>Home
<DatePicker/>
    </div>
)
const About = ()=>(
    <div>About</div>
)

class App extends Component {
    constructor(props){
        super(props);
        console.log(props)
    }
    render() {//console.log(Datepicker)
        const history = createHistory();
        console.log(history)
        return (
            <Router history={history}>
                <Layout className="layout">
                    <Header history={history}/>
                    <Content style={{ padding: '0 50px' }}>
                        <Breadcrumb style={{ margin: '12px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                            <Route exact={true} path="/" component={Home} />
                            <Route path="/about" component={About} />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
                {/*<div className="App">*/}
                    {/*<Header/>*/}
                    {/*<p className="App-main">*/}
                        {/*<Route exact={true} path="/" component={Home} />*/}
                        {/*<Route path="/about" component={About} />*/}
                    {/*</p>*/}
                {/*</div>*/}
            </Router>
        );
    }
}

export default connect()(App);
