import React, { Component } from "react";
import "./Card.css";


class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="img-wrapper" style={{backgroundImage: `url(${this.props.img})`}}>
        </div>
        <div className="text-wrapper">
          <h4>{this.props.title}</h4>
          <p>{this.props.description}</p>
          <a href={this.props.repoLink}>View Repository</a>
          <a href={this.props.codeLink}>Visit Site</a>
        </div>
      </div>
    );
  }
}

export default Card;
