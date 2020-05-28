import React from 'react'
import './Messages.css'
import ScrollToBottom from "react-scroll-to-bottom"
import Message from '../Message/Message'

const Messages = ({ messages, name }) => (
    <ScrollToBottom>
        {messages.map((message, i)=> <div key={i}>
            <Message message={message} name={message.user} />
        </div>  )}
    </ScrollToBottom>
  );
  
  export default Messages;
  