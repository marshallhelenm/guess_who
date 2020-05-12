import React, { useState, useEffect } from "react";
import { Card, Button, Dimmer, Header, Icon } from "semantic-ui-react";

const Stub = (props) => {
  const [dimmer, setDimmer] = useState(false);

  const flipDown = (e) => {
    //TODO: a function to change styling on the relevant card to grey it out or put a red x over it or something
    e.preventDefault();
    console.log("flipDown");
    setDimmer(true);
  };

  const flipUp = (e) => {
    //TODO: a function to change styling on the relevant card to reverse the flipdown
    e.preventDefault();
    console.log("flipUp");

    setDimmer(false);
  };

  const confirmGuess = () => {
    //TODO: a function to prompt the user on whether or not they really want to guess that card
    // brings up a modal
  };
  let url = props.item.img;
  let title = props.item.title;

  return (
    <Card className="Stub" stackable={"true"}>
      {/* TODO: look into fixing stackable */}
      <div className="ui image stub-image">
        <Dimmer.Dimmable active={dimmer}>
          {console.log("dimmer is ", dimmer)}
          <img src={url} />
          <Dimmer active={dimmer} onClickOutside={flipUp}>
            <Header as='h2' icon inverted>
              <Icon name='x' size='big' color='red' onClick={flipUp}/>
            </Header>
          </Dimmer>
        </Dimmer.Dimmable>
      </div>
      <Card.Content className="stub-bar">
        <Card.Header>
          <h3>{title}</h3>
        </Card.Header>
      </Card.Content>
      <Card.Content extra className="stub-bar">
        <Button color="red" onClick={flipDown}>
          Nope
        </Button>
        <Button color="green" onClick={confirmGuess}>
          Pick Me!
        </Button>
      </Card.Content>
    </Card>
  );
};

export default Stub;
