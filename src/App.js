import React, { Component } from "react";

export default class Filter extends Component {
  state = {
    pessoas: [
      { nome: "Leno", idade: 20 },
      { nome: "João", idade: 20 },
      { nome: "Valeria", idade: 18 },
      { nome: "Pamela", idade: 13 },
      { nome: "Kelly", idade: 15 }
    ],
    deMaior: []
  };

  maiores = () => {
    this.setState({
      deMaior: this.state.pessoas.filter((element) => {
        return element.idade > 18;
      })
    });
  };

  render() {
    return (
      <div>
        <h1>Vamos fazer um filter</h1>
        {this.state.pessoas.map((item) => (
          <ul>
            <li>Meu nome é {item.nome}</li>
            <li>e minha idade {item.idade}</li>
          </ul>
        ))}
        <button onClick={this.maiores}>Filtrar</button>
        <h2>Apenas os maiores de idade</h2>
        {this.state.deMaior.map((item) => (
          <ul>
            <li>meu nome {item.nome}</li>
            <li> minha idade {item.idade}</li>
          </ul>
        ))}
      </div>
    );
  }
}
