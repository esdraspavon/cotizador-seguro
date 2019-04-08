import React, { Component } from "react";
import Header from "./Header";
import Form from "./Form";

class App extends Component {
  render() {
    return (
      <div className="contenedor">
        <Header title="Cotizador de seguro de auto" />
        <div className="contenedor-formulario">
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
