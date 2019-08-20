import React from 'react';
import Message from '../components/Message';

export default class MessageField extends React.Component {
    // state = {
    //   messages: ['mes1', 'mes2', 'mes3']    
    // };

    constructor(props) {
        super(props);
    
        this.state = {
            messages: ['mes1', 'mes2', 'mes3']
        };
      }

    render(){
        let messages1 = this.state.messages.map((elem) => {
            <Message text = {elem}/>
        });

        return(
            alert(messages1),
            <div>
                { messages1 }
            </div>
        );
    }
}