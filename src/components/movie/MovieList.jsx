import React, { Component } from 'react'

import { Spin, Alert,Pagination } from 'antd';

import fetchJsonp from 'fetch-jsonp'

import MovieItem from './MovieItem'

export default class MovieList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: [],
      movieType: props.match.params.type,
      nowPage: parseInt(props.match.params.page) || 1,//当前页码
      pageSize: 12,//每页数据条数
      total: 0, //分类项总共多少条数据
      isLoading:true
    }
  }

  UNSAFE_componentWillMount() {
    this.LoadPage()
  }

  render() {
    console.log(this.props.match.params.type);

    
    return (
      <div>
         {this.renderList()}
      </div>
    )
  }

 UNSAFE_componentWillReceiveProps(nextProps){
  //  地址变化  重置state中的参数项 重置玩刷新
    console.log(nextProps);
    this.setState({
      isLoading:true,
      nowPage:parseInt(nextProps.match.params.page)||1,
      movieType:nextProps.match.params.type
    },function(){
      this.LoadPage()
    })
  }


  renderList=()=>{
    if(this.state.isLoading){
      return <Spin tip="Loading..." >
      <Alert style={{height:500}} type="info"/>
    </Spin>
    }else{
      return <div>
      <div style={{display:'flex',flexWrap:'wrap',overflow:'hidden'}}>
        {this.state.movie.map((item)=>{
          return <MovieItem {...item} history = {this.props.history} key={item.id} ></MovieItem> })}
      </div>
      <div>
      <Pagination current={this.state.currentPage} total={(this.state.total/this.state.pageSize)+1} onChange={this.pageChange} />
      </div>
      </div>  
    }
  }
  LoadPage=()=>{
    const start = this.state.pageSize*(this.state.nowPage-1)
    const url = `https://douban.uieee.com/v2/movie/${this.state.movieType}?start=${start}&count=${this.state.pageSize}`

    fetchJsonp(url).then(response => {
      return response.json()
    }).then(data => {
      this.setState({
        total:data.total,   
        isLoading:false,    //加载成功
        movie:data.subjects//获取电影
      })
    })

    // console.log(this.state.movie);
    
    setTimeout(() => {
      this.setState({
        isLoading:false
      })
    }, 1000);
  }

  pageChange = (page)=>{
    // console.log(page);
    this.setState({
      currentPage:page
    })

    // window.location.href='/#/movie/'+this.state.movieType+'/'+page
    this.props.history.push('/movie/'+this.state.movieType+'/'+page)
    console.log(this.props);
    
  }
  
  
}
