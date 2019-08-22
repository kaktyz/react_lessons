import React from 'react';
import Message from './Message';

export default class MessageField extends React.Component {
    // У препода работает у меня нет why?
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
        
        // let messages1 = this.state.messages.map((elem) => {
        //     <Message text = {elem}/>
        // });
        
        let messages1 = this.state.messages.map((e)=>{
            // Сюда после 4 итеррации приходят три undefined, почему?
            // debugger;
            <Message text = {e} />
        });
        
        return(
            <div>
                { messages1 }
            </div>
        );
    }
}