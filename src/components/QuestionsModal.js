import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

const QuestionsModal = () => {
  const qs = [
    "Hypothetically, would I go on a date with this __?",
    "Would I relate to this __?",
    "Would I be attracted to this __?",
    "Would I want this person to fight alongside me during the apocalypse?",
    "Would this meme be my sidekick?",
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
