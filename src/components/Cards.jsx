import React from "react";
import Card from "./Card";
import styled from "styled-components";

const StyledCards = styled.div`
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto 50px auto;
    width: 100%;
    max-width: 1200px;
    padding: 0 20px;
  }
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 300px;
    margin: 20px;
  }
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  .card img {
    width: 100%;
  }
  .card h3,
  .card p {
    margin: 10px;
  }
  h1 {
    text-align: center;
    margin-top: 50px;
    color: gray;
    font-size: 50px;
  }
`;

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: this.props.cards,
      title: this.props.title,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.cards !== state.cards) {
      return { cards: props.cards };
    }
    return null;
  }

  render() {
    return this.state.cards.length === 0 ? (
      <h1
        style={{
          textAlign: "center",
          marginTop: "50px",
          color: "red",
          fontSize: "50px",
        }}
      >
        No cards available
      </h1>
    ) : (
      <StyledCards>
        <div>
          <h1>{this.props.title}</h1>
          <div className="cards">
            {this.state.cards.map((card, i) => (
              <div key={i} className="card">
                <Card
                  name={card.name}
                  email={card.email}
                  tel={card.tel}
                  photo={card.photo}
                />
                <button onClick={() => this.props.onRemove(i)}>Remove</button>
              </div>
            ))}
          </div>
        </div>
      </StyledCards>
    );
  }
}

export default Cards;
