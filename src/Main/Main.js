import React, { Component } from "react";
import "./Main.css";
import Card from "../Card/Card";
import { cardsContent } from "../content/content";

class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <h3>Works</h3>
        <div className="cards-wrapper">
          {cardsContent.map((content) => {
            return (
              <Card
                img={content.img}
                title={content.title}
                description={content.description}
                repoLink={content.repoLink}
                codeLink={content.codeLink}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Main;
