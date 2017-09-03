import React from 'react'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

class MyHeader extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            selectedKeys: [],
            history : props.history
        };
        console.log(props)
        this.linkTo = this.linkTo.bind(this)
    }

    componentWillReceiveProps() {
        // this.setState({ selectedKeys: [this.context.router.location.pathname] });
        this.setState({ selectedKeys: [this.state.history.location.pathname]});

    }

    componentDidMount() {
        // this.setState({ selectedKeys: [this.context.router.location.pathname] });
        this.setState({ selectedKeys: [this.state.history.location.pathname]});
    }

    linkTo(item) {
        // this.props.routing.push(item.key);
        this.state.history.push(item.key)
        this.setState({ selectedKeys: [item.key]});
    }

    render(){
        return(
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['/role']}
                    selectedKeys={this.state.selectedKeys}
                    onClick={this.linkTo}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="/">home</Menu.Item>
                    <Menu.Item key="/about">about</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.routing)
    return ({
        routing:state.routing
    })};
export default connect(mapStateToProps)(MyHeader);

// export default () => (
//     <div className="App-header">
//         <NavLink exact={true} to="/">home</NavLink>
//         <NavLink to="/about">about</NavLink>
//     </div>
// )