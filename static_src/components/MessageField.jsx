import React from 'react';
import Message from './Message';

export default class MessageField extends React.Component{
    state = {
      messages: ['mes1', 'mes2', 'mes3']    
    };

    render(){
        const messages = this.state.messages.map((elem) => {
            <Message text = {elem}/>
        });

        return(
            <div>
                <Message text = 'message 1'/>
                <Message text = 'message 2'/>
                <Message text = 'message 3'/>
            </div>
        );
    }
}