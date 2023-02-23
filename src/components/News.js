import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country:"in",
    pagesize:9,
    category:"general"
  }
  static propTypes = {
    country:PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string
  }
   capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
    document.title=`NewsDaily - ${this.capitalizeFirstLetter(this.props.category)}`
  }
  async updatenews(){
    const urll=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bfb8f18935a04dedb2ce52361f1d5221&page=${this.state.page}&pageSize=${this.props.pagesize}`
    this.setState({loading:true});
    let data = await fetch(urll)
    let parsed=await data.json()
    this.setState({articles:parsed.articles,
      totalResults:parsed.totalResults,
      loading:false
    })
  }
  async componentDidMount(){
    this.updatenews();
  }
  prev=async()=>{
    await this.setState({page:this.state.page-1});
    this.updatenews();
  }
  next=async()=>{
  await this.setState({page:this.state.page+1});
  this.updatenews();
  }
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center text-decoration-underline" style={{margin:"35px 0px"}}>Top Headlines of {this.capitalizeFirstLetter(this.props.category)}</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
        { !this.state.loading && this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
                     <Newsitem title={element.title?element.title.slice(0,60):""} desc={element.description?element.description.slice(0,60):""} imurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt}/></div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<2} onClick={this.prev} type="button" className="btn btn-dark btn-lg">&larr;Previous</button>
        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)} onClick={this.next} type="button" className="btn btn-dark btn-lg">Next&rarr;</button>
        </div>
      </div>
    );
  }
}
export default News;
