import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      email: props.email,
      tel: props.tel,
      photo: props.photo,
    };
  }

  render() {
    return (
      <div>
        <img
          src={
            this.state.photo
              ? this.state.photo
              : "https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png"
          }
          alt={this.state.name ? this.state.name : "Not Specified"}
        />
        <h3>{this.state.name ? this.state.name : "Not Specified"}</h3>
        <p>{this.state.email ? this.state.email : "Not Specified"}</p>
        <p>{this.state.tel ? this.state.tel : "Not Specified"}</p>
      </div>
    );
  }
}

export default Card;
