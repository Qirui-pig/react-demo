import React, { Component } from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

import appStyle from './scss/app.scss'

import About from './components/about/About'
import Home from './components/home/Home'
import Movie from './components/movie/Movie'


// const appStyle = appStyle

export default class App extends Component {
  constructor(props){
    super(props),
    this.state = {
      itemhref:window.location.hash.split('/')[1]
    }
  }


  render() {
    // console.log(window.location.hash.split('/')[1]);
    
    return (<Router>
        <Layout className="layout"style={{height:'100%'}}>
          <Header>
            <div className={appStyle.logo} />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[window.location.hash.split('/')[1]]}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="home">
                <Link to="/home">首页</Link>
              </Menu.Item>
              <Menu.Item key="movie">
                <Link to="/movie/in_theaters/1">电影</Link>
              </Menu.Item>
              <Menu.Item key="about">
                <Link to="/about">关于</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content>
            <div className="site-layout-content" style={{backgroundColor:'#fff',height:'100%'}}>
              <Route path='/home' component={Home}></Route>
              <Route path='/movie' component={Movie}></Route>
              <Route path='/about' component={About}></Route>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Qirui ©2020</Footer>
        </Layout>
    </Router>
    )
  }
}

