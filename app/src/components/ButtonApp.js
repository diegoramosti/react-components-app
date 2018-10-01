import React, {Component} from 'react';

export default class ButtonApp extends Component {
    render (){
        return (
                <div className="pure-control-group">                                                      
                    <button type={this.props.type} className={this.props.className}>{this.props.label}</button>                                                      
                </div>
        );
    }
}