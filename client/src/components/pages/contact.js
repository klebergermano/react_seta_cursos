import React, { Component } from "react";
import ReactDOM from "react-dom";

import Form from "../common/form";
import FormNetlify from "../common/formNetlify";
import Info from "../common/info_contatos";
import Icon from "../../assets/icons";
import Iframe from "react-iframe";

class Contact extends Component {
  state = {};

  render() {
    return (
      <div className="pages" id="contact">
        <div id="contactContainer">
          <h1>Entre em contato conosco</h1>
          <div id="info_contato">
            <p id="message">
              Envie-nos uma mensagem ou entre em contato conosco por um de
              nossos canais de comunicação.
            </p>
            <p className="infoContato" id="tel">
              <Icon name="cellphone" className="icon cellphone" width="15" />
              {Info.telefone} <Icon name="whatsapp" className="icon whatsapp" />
            </p>
            <p className="infoContato" id="face">
              <Icon name="facebook" className="icon facebook" />
              <a target="_blank" href={Info.facebook}>
                Seta Cursos
              </a>
            </p>

            <p className="infoContato" id="insta">
            <Icon name="instagram" className="icon instagram" /> 
          
            <a target="_blank" href={Info.instagram}>
              @Seta Cursos
            </a>
            </p>




            <p className="infoContato" id="email">
              <Icon name="email" className="icon email" />

              {Info.email}
            </p>
            <p className="infoContato" id="endereco">
              {Info.endereco}
            </p>
          </div>
          <FormNetlify/>
        </div>
      </div>
    );
  }
}

export default Contact;
