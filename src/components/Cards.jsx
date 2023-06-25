import React from "react";
import Card from "./Card";
import styled from "styled-components";

const StyledCards = styled.div`
  @media only screen and (max-width: 600px) {
    .cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin: 0 auto 50px auto;
      width: 100%;
      max-width: 1200px;
      padding: 0 20px;
      flex-direction: column;
    }
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto 50px auto;
    width: 100%;
    max-width: 1200px;
    padding: 0 20px;
    flex-direction: row;
    text-align: center;
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
  button {
    background-color: #f44336;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
  button:hover {
    background-color: #e53935;
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
              <div key={card.id} className="card">
                <Card
                  name={card.name}
                  email={card.email}
                  tel={card.tel}
                  photo={card.photo}
                />
                <button
                  onClick={() => {
                    this.props.onRemove(card.id);
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </StyledCards>
    );
  }
}

export default Cards;
