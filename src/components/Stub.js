import React, { Component } from "react";
import { Card, Image, Button } from "semantic-ui-react";

class Stub extends Component {
  flipDown = () => {
      //TODO: a function to change styling on the relevant card to grey it out or put a red x over it or something
  };

  confirmGuess = () => {
      //TODO: a function to prompt the user on whether or not they really want to guess that card
      // brings up a modal
  }

  render() {
    let url = this.props.img.url;
    let title = this.props.img.title;
    return (
      <Card>
        <Image src={url} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{title}</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Button color="red" onClick={this.flipDown()}>Nope</Button>
          <Button color="green" onClick={this.confirmGuess}>Pick Me!</Button>
        </Card.Content>
      </Card>
    );
  }
}

export default Stub;
