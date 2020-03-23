import React, { Component } from 'react'


import { Layout, Menu } from 'antd';
const { Content, Sider } = Layout;

import { Route, Link ,Switch} from 'react-router-dom'


import MovieList from './MovieList'
import Detail from './Detail'

export default class Movie extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    // console.log(window.location.hash.split('/')[2]);
    // console.log(props.match.paramas.type);
    
    return (
      <Layout style={{ height: '100%' }}>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={[window.location.hash.split('/')[2]]}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="in_theaters">
              <Link to="/movie/in_theaters/1">正在热映</Link>
            </Menu.Item>
            <Menu.Item key="coming_soon">
              <Link to="/movie/coming_soon/1">即将上线</Link>
            </Menu.Item>
            <Menu.Item key="top250">
              <Link to="/movie/top250/1">Top250</Link>
            </Menu.Item>

          </Menu>
        </Sider>
        <Layout style={{ paddingLeft: '1px', height: '100%' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 10,
              margin: 0,
              height: '100%',
            }}
          >
            <Switch>
              <Route exact path='/movie/detail/:id' component={Detail}></Route>
              <Route exact path='/movie/:type/:page' component={MovieList}></Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    )
  }

}
