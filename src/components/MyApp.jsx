import React from "react";

import Cards from "./Cards";

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: props.cards,
      title: props.title,
    };
  }

  handleRemoveCard = (id) => {
    const cards = this.state.cards.filter((card) => card.id !== id);
    this.setState({ cards });
  };

  render() {
    // console.log(this.state.cards);
    return (
      <section>
        <Cards
          cards={this.state.cards}
          title={this.state.title}
          onRemove={this.handleRemoveCard}
        />
      </section>
    );
  }
}

export default MyApp;
