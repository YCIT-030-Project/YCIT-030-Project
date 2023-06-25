import React from "react";
import styled from "styled-components";

import Cards from "./Cards";

const StyledResetButton = styled.section`
display: flex;
justify-content: center;
button {
  background-color: green;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.2rem;
}
}
`;
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    const savedCards = JSON.parse(localStorage.getItem("cards"));
    this.state = {
      cards: savedCards || props.cards,
      title: props.title,
    };
  }

  handleRemoveCard = (id) => {
    const cards = this.state.cards.filter((card) => card.id !== id);
    this.setState({ cards }, () => {
      localStorage.setItem("cards", JSON.stringify(cards));
    });
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
        <StyledResetButton>
          <button
            onClick={() => {
              this.setState({ cards: this.props.cards }, () => {
                localStorage.removeItem("cards");
              });
            }}
          >
            Reset
          </button>
        </StyledResetButton>
      </section>
    );
  }
}

export default MyApp;
