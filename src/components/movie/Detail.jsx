import React, { Component } from 'react'
import { Button } from 'antd';

import fetchJsonp from 'fetch-jsonp'


export default class Detail extends Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  render() {
    console.log(this.props.match.params.id);
    
    return (
      <div>
        <Button type="primary" onClick={this.goBack}>
           返回
        </Button><br/>
        <img src={this.state.img} alt=""/>
        <p>{this.state.summary}</p>
      </div>
    )
  }
  goBack = () =>{
    this.props.history.go(-1);
  }
  UNSAFE_componentWillMount(){
    fetchJsonp(`https://douban.uieee.com/v2/movie/subject/${this.props.match.params.id}`).
    then(response=>{
      return response.json()
    }).then(data=>{
      // console.log(data);
      this.setState({
        img:data.images.medium,
        summary:data.summary
      })
    })
  
  
  
  }


}
