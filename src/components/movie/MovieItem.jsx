import React, { Component } from 'react'


import { Rate } from 'antd';
import style from '../../scss/movieItem.scss'

export default class MovieItem extends Component {
  constructor(props){
    super(props),
    this.state = {
    
    }
  }

  render() {
    return (
      <div className={style.box} onClick={this.getDetail}>
        <img className={style.img} src={this.props.images.small.replace('img3.doubanio.com','img1.doubanio.com') } alt="暂无图片"/>
        <h4>电影名称：{this.props.title}</h4>
        <h4>上映年份：{this.props.year}年</h4>
        <h4>电影类型：{this.props.genres.join(',')}年</h4>
        <Rate disabled defaultValue={this.props.rating.average/2} />
      </div>
    )
  }
  getDetail = ()=>{
    // console.log(this.props);
    this.props.history.push('/movie/detail/'+this.props.id)
  }
}
