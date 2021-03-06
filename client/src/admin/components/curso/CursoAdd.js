import React, { Component } from "react";
import InputMask from "react-input-mask";
import ReactDOM from "react-dom";
import NavCursos from "./NavCursos";

class CursoAdd extends Component {
  state = {
    curso: "",
    duracao: "",
    valor: "",
    created: "",
    msg_send: "",
  };

  componentDidMount() {}

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  showStatus = () => {
    console.log(this.state);
  };

  cadastrar = (e) => {
    if (this.state.curso === "" || this.state.curso === " ") {
    } else {
      const data = this.state;
      fetch("/profile/cadastrar_curso", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => {
          this.setState({ msg_send: res.msg_send });
          console.log("Text: " + res.msg_send);
          document.querySelector(".bg_inputs").style.display = "none";
          document.querySelector(".cadastro_sucesso").style.display = "block";
        })
        .then((res) => {});
    }

    e.preventDefault();
  };
  render() {
    return (
      <div>
        <NavCursos />
        <button onClick={this.showStatus}>Show Status</button>
        <form className="form_add form_curso" id="form_add_curso">
          <div className="cadastro_sucesso">
            <h3>{this.state.msg_send}</h3>
          </div>
          <div className="bg_inputs">
            <h1>Cadastro de Curso</h1>

            <div className="add_curso">
              <label>Nome:</label>

              <input type="text" name="curso" onChange={this.handleChange} />
            </div>

            <div className="add_duracao">
              <label>Duração Meses:</label>

              <input
                type="number"
                name="duracao"
                onChange={this.handleChange}
              />
            </div>
            <div className="add_obs">
              <label>Obs.:</label>

              <input type="text" name="obs" onChange={this.handleChange} />
            </div>

            <div className="add_valor">
              <label>Valor</label>
              <input type="number" name="valor" onChange={this.handleChange} />
            </div>

            <div className="add_created">
              <label>Cadastro</label>
              <input type="date" name="created" onChange={this.handleChange} />
            </div>
            <button className="btn_cadastrar" onClick={this.cadastrar}>
              {" "}
              Cadastrar Curso
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CursoAdd;
