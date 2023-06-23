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

  handleRemoveCard = (i) => {
    const cards = [...this.state.cards];
    cards.splice(i, 1);
    this.setState({ cards });
  };

  render() {
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
