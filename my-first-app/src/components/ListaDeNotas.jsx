import React, { Component } from "react";
import CardNota from "./CardNota";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria) => {
          return(
          <l1>
            <div>{categoria}</div>
            <CardNota />
          </l1>
          );
        })}
      </ul>
    );
  }
}
export default ListaDeNotas;
