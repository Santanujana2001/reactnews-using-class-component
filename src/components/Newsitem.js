import React, { Component } from 'react'
import './Newsitem.css'
export class Newsitem extends Component {
  render() {
    return (
      <div className="my-3">
         <div className="card">
        <img src={this.props.imurl?this.props.imurl:"https://source.unsplash.com/random/300×300"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}...</h5>
          <p className="card-text">{this.props.desc}...</p>
          <p className="card-text"><small className="text-muted">published by : {this.props.author ? this.props.author: "Unknown"} on {new Date(this.props.date).toGMTString()}</small></p>
          <a href={this.props.newsurl} className="btn btn-warning">read more</a>
        </div>
      </div>
      </div>
    )
  }
}

export default Newsitem
