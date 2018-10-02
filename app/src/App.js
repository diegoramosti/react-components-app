import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
import {AutorBox} from './Autor';
import LiCustomizado from './components/LiCustomizado';


class App extends Component {

  render() {
    return (      
      <div id="layout">
        <a href="#menu" id="menuLink" className="menu-link">  
            <span></span>
        </a>  
        <div id="menu">
            <div className="pure-menu">
                <a className="pure-menu-heading" href="#">Company</a>
    
                <ul className="pure-menu-list">
                    <LiCustomizado Text="Home" href="#" />
                    <LiCustomizado subscribeName="atualiza-menu-autores" Text="Autor" href="#" />
                    <LiCustomizado Text="Livro" href="#" />
                </ul>
            </div>
        </div>  
        <div id="main">
            <AutorBox />
        </div> 
      </div> 
    );
  }
}

export default App;