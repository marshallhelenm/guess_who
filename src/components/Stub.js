import React, { Component } from "react";
import { Card, Image, Button } from "semantic-ui-react";

class Stub extends Component {
  flipDown = () => {
    //TODO: a function to change styling on the relevant card to grey it out or put a red x over it or something
  };

  confirmGuess = () => {
    //TODO: a function to prompt the user on whether or not they really want to guess that card
    // brings up a modal
  };

  render() {
    let url = this.props.item.img;
    let title = this.props.item.title;
    return (
      <Card className="Stub" stackable={true}>
        <Image className='stub-image' src={url} wrapped ui={false} />
        <Card.Content className='stub-bar'>
          <Card.Header><h3>{title}</h3></Card.Header>
        </Card.Content>
        <Card.Content extra className='stub-bar'>
          <Button color="red" onClick={this.flipDown()}>
            Nope
          </Button>
          <Button color="green" onClick={this.confirmGuess}>
            Pick Me!
          </Button>
        </Card.Content>
      </Card>
    );
  }
}

export default Stub;
