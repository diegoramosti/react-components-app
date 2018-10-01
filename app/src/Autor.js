import React, { Component } from 'react';
import $ from 'jquery';
import InputCustomizado from './components/InputCustomizado';
import ButtonApp from './components/ButtonApp';

class FormularioAutor extends Component{
   
constructor(){
    super();
    this.state = { id: '', nome: '', email: '', senha:''} 
    this.enviarForm = this.enviarForm.bind(this);
    this.setNome = this.setNome.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setSenha = this.setSenha.bind(this);
  }

    render(){
        return (
            <div className="pure-form pure-form-aligned">
              <form className="pure-form pure-form-aligned" onSubmit={this.enviarForm} method="post">
                <InputCustomizado id="nome" label= "Nome" type="text" name="nome" value = {this.state.nome} onChange = {this.setNome} />
                <InputCustomizado id="email" label="Email" type="email" name="email" value = {this.state.email} onChange = {this.setEmail} />
                <InputCustomizado id="senha" label="Senha" type="password" name="senha" value = {this.state.senha} onChange = {this.setSenha} />

                <ButtonApp className="pure-button pure-button-primary" type ="submit" label ="Gravar"/>
              </form>
            </div>  
        );
    }

    
enviarForm(evento){
    evento.preventDefault();
    let xdata = JSON.stringify({nome: this.state.nome, email: this.state.email, senha: this.state.senha});
    console.log(xdata);
  
    $.ajax({
      url:"http://localhost:20000/api/Autor",
      contentType: 'application/json',
      dataType: 'json',
      type: 'POST',
      data: xdata,
      contentType: 'application/json',
      success: function(resposta){
        this.props.callbackAtualizaListagem();
      }.bind(this),
      error: function(resposta){      
        console.log("erro");
        console.log(resposta);
      }
    })
  }
  
  setNome(evento){
    this.setState({nome: evento.target.value});
  }
  
  setEmail(evento){
    this.setState({email: evento.target.value});
  }
  
  setSenha(evento){
    this.setState({senha: evento.target.value});
  }

}


 class TabelaAutores extends Component{ 
    render(){
        return (
            <div>            
                <table className="pure-table">
                    <thead>
                        <tr>
                        <th>Nome</th>
                        <th>email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          this.props.lista.map(function(autor){
                              return (
                              <tr key={autor.id}>
                                  <td>{autor.nome}</td>
                                  <td>{autor.email}</td>
                              </tr>
                              )
                          })
                        }
                    </tbody>
                </table> 
          </div>       
        );
    }
}

export class AutorBox extends Component{
 
constructor(){
  super();
  this.state = {lista: []} ;
  this.carregarInformacoes = this.carregarInformacoes.bind(this);
}
  
  render(){
    return (
      <div>
        <div className="header">
              <h1>Cadastro de Autores</h1>
        </div>
        <div className="content" id="content">
              <FormularioAutor callbackAtualizaListagem = {this.carregarInformacoes}/>
              <TabelaAutores lista = {this.state.lista}/>
        </div>  
      </div>        
    );
  }
  
carregarInformacoes(){
  $.ajax({
    url:"http://localhost:20000/api/Autor",
    dataType: 'json',    
    type: 'GET',       
    success: function(resposta){
      console.log(resposta);
      console.log("ok");

       this.setState({lista: resposta});
    }.bind(this)
  });
}

  componentDidMount(){
    this.carregarInformacoes();
  }
}