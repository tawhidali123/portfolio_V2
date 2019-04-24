import React, { Component } from 'react';
import Main from './Components/main'; 
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import { Link } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
        <div className="navi">
            <Layout className="container">
                <Header title="Tawhid Ali" scroll className="header-color">
                    <Navigation>
                        <Link to="">Home</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/resume">Resume</Link>
                    </Navigation>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                    <Link to="">Home</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/resume">Resume</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main />
                </Content>
            </Layout>
        </div>
    );
  }
}

export default App;
