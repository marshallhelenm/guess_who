import React from "react";
import { Button, Modal } from "semantic-ui-react";

const QuestionsModal = () => {
  const qs = [
    "Hypothetically, would I go on a date with this meme?",
    "Would I relate to this meme?",
    "Would I be attracted to this meme?",
    "Would I want this person to fight alongside me during the apocalypse?",
    "Would this meme be my sidekick?",
    "Would I get in trouble for using this meme in the office slack channel?"
  ];

  return (
    <Modal trigger={<Button>Question Ideas</Button>} centered={false} closeIcon>
      <Modal.Header>Question Ideas</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <ul>
            {qs.map((item, index) => (
              <li key={"q"+index}>{item}</li>
            ))}
          </ul>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default QuestionsModal;
