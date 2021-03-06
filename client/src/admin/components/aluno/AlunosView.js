import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import NavAlunos from "./NavAlunos";

import * as helpers from "../helpers/";
import config from "../../../config";
class Alunos extends Component {
  constructor() {
    super();
    this.state = {
      alunos: [],
    };
  }

  componentDidMount() {
    fetch("/profile/alunos")
      .then((res) => res.json())
      .then((alunos) => this.setState({ alunos }))
      .then(() => {
        console.log(this.state);
      });
  }

  render() {
    return (
      <div className="page_dashboard page_aluno_view">
        <NavAlunos />
        <h1>Alunos</h1>
        <div id="teste"></div>
        <table className="table_general">
          <thead>
            <tr>
              <th>id</th>
              <th>Nome</th>

              <th>Obs</th>
              <th>Cadastrado</th>
              <th>Responsavel</th>
              <th>Vinculado</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {this.state.alunos.reverse().map((alunos) => (
              <tr
                key={alunos.id}
                className={"vinculado_" + alunos.vinculado_resp}
              >
                <td className="td_id">{alunos.id}</td>
                <td>{alunos.nome}</td>

                <td className="td_obs">{alunos.obs}</td>
                <td className="td_cadastrado">
                  {helpers.dateFunc.dateFormatBR(alunos.created)}
                </td>
                <td className="td_responsavel">{alunos.responsavel}</td>
                <td className="td_vinculado">{alunos.vinculado_resp}</td>
                <td className="td_control">
                  <Link
                    className="btn_resumo"
                    to={
                      config.BASE_URL_ADMIN +
                      "/responsavel_resumo/" +
                      alunos.id_resp
                    }
                  >
                    Resumo
                  </Link>{" "}
                  <Link
                    className="btn_edit"
                    to={config.BASE_URL_ADMIN + "/aluno_edit/" + alunos.id}
                  >
                    Editar
                  </Link>
                  <Link
                    className="btn_delete"
                    to={config.BASE_URL_ADMIN + "/alunos"}
                  >
                    x
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Alunos;
