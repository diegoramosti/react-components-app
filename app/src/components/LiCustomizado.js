import React, { Component } from 'react';
import PubSub from 'pubsub-js';

export default class LiCustomizado extends Component {

    constructor(){
        super();
        this.state = {Text: ''};
        this.setText = this.setText.bind(this);
    }

    render (){
        return (
            <li className="pure-menu-item"><a href={this.props.href} className="pure-menu-link">{this.state.Text}</a></li>          
        );
    }

    
  setText(count){
      if(count > 0)
      {
        this.setState({Text: this.props.Text + ' (' + count +')' });
      }
      else{
        this.setState({Text: this.props.Text});
      }
  }

    componentDidMount(){   
        this.setText(0);
        PubSub.subscribe(this.props.subscribeName , function(topico, count){
            this.setText(count);
        }.bind(this));
    }
}