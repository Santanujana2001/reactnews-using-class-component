import React, { Component } from 'react'
import cut from './cut.JPG'
import './About.css'
export class About extends Component {
  render() {
    return (
      <div>
        <section className="about-us">
        <div className="about">
          <img src={cut} className="pic" alt="my pic" />
          <div className="text">
            <h2>About Me</h2>
            <h5>Full stack Developer &amp; <span>Designer</span></h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita natus ad sed harum itaque ullam enim quas, veniam accusantium, quia animi id eos adipisci iusto molestias asperiores explicabo cum vero atque amet corporis! Soluta illum facere consequuntur magni. Ullam dolorem repudiandae cumque voluptate consequatur consectetur, eos provident necessitatibus reiciendis corrupti!</p>
            <div className="data">
              <a href="mailto:sanujana7551@gmail.com" className="hire">Hire Me</a>
            </div>
          </div>
        </div>
      </section>
      </div>
    )
  }
}

export default About
