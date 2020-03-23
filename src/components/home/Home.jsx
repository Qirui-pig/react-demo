import React, { Component } from 'react'

import homeImg from '../../img/home.jpg'

export default class Home extends Component {
  render() {
    return (
      <div>

        <div style={{
          background: `url(${homeImg})`, backgroundPosition: 'center',
          backgroundSize: 'cover', width: '100%', height: '700px',
          position: 'absulute'
        }}>
          <div style={{color:'#fff',position:'absolute',width:'200px',textAlign:'center',height:160,
            left:'50%',top:"50%",transform:"translateX(-50%) translateY(-50%)"
          }}>
            <h1 style={{ fontSize: '2.0rem', fontWeight: '400',color:'#fff'}}>欢迎来到首页</h1>
            <h2 style={{color:'#fff'}}>2020年2月29日</h2>
          </div>
        </div>
      </div>
    )
  }
}
