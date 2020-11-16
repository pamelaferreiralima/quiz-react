import React, { Component } from "react";
import "./styles.css";

class Quiz extends Component {
  state = {
    perguntas: [
      {
        pergunta: " 1) O que é Inteligência Artificial?",
        respostas: [
          {
            opcao: "Fazer com que uma máquina raciocine como a mente humana",
            certo: true
          },
          {
            opcao: "Tipo de inteligência ligada por aproximação",
            certo: false
          },
          {
            opcao: "Tipo de inteligência sobrenatural",
            certo: false
          }
        ]
      },
      {
        pergunta: "2) O que é Front-end?",
        respostas: [
          {
            opcao: "Uma função do JavaScript",
            certo: false
          },
          {
            opcao: "Desenvolvedor de aplicações web ",
            certo: false
          },
          {
            opcao:
              "Responsável por “dar vida” à interface, trabalha com a parte da aplicação que interage diretamente com o usuário ",
            certo: true
          }
        ]
      },
      {
        pergunta: "3) O que é Back-end?",
        respostas: [
          {
            opcao: "Utilizado para análise no qual o usuário tem acesso ",
            certo: false
          },
          {
            opcao:
              "Trabalha na parte de “trás” da aplicação, responsável  pela implementação da regra de negócio",
            certo: true
          },
          {
            opcao:
              "Tipo de código utilizado em React, biblioteca do JavaScript ",
            certo: false
          }
        ]
      }
    ],
    perguntaAtual: 1
  };

  next = () => {
    this.setState({
      perguntaAtual: this.state.perguntaAtual + 1
    });
  };

  renderPergunta = () => {
    return (
      <div>
        {this.state.perguntas
          .slice(this.state.perguntaAtual - 1, this.state.perguntaAtual)
          .map((item) => (
            <div>
              <p>{item.pergunta}</p>
              {this.renderResposta(item.respostas)}
            </div>
          ))}
      </div>
    );
  };
  renderResposta = (resposta) => {
    return (
      <div>
        {resposta.map((item) => (
          <span>
            <label for="resposta">
              <input type="radio" name="resposta" />
              {item.opcao}
            </label>
          </span>
        ))}
      </div>
    );
  };

  render() {
    return (
      <div>
        <h1> Tech Quiz </h1>
        {this.renderPergunta()}
        <button onClick={this.next}>Next</button>
      </div>
    );
  }
}
export default Quiz;
