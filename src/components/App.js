import React, { Component } from "react";
import Header from "./Header";
import Form from "./Form";
import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan } from "../helper";
import Summary from "./Summary";
import Result from "./Result";

class App extends Component {
  state = {
    results: "",
    data: {}
  };

  cotizarSeguro = data => {
    const { marca, plan, year } = data;

    //Agregar una base de 2000
    let result = 2000;

    //Obtener la diferencia de años y
    const diferencia = obtenerDiferenciaAnio(year);

    //por cada año restar el 3%
    result -= (diferencia * 3 * result) / 100;

    // Americano 15% Asiatico 5% y Eurepoeo 30% de incremento al valor actual
    result = calcularMarca(marca) * result;

    //el plan del auto, el básico incrementa el valor 20%
    //y cobertura completa 50%
    let incremetoPlan = obtenerPlan(plan);

    //Dependiendo del plan icrementar
    result = parseFloat(incremetoPlan * result).toFixed(2);

    //Añadiendo el resultado al state
    this.setState({
      result,
      data
    });
  };

  render() {
    return (
      <div className="contenedor">
        <Header title="Cotizador de seguro de auto" />
        <div className="contenedor-formulario">
          <Form cotizarSeguro={this.cotizarSeguro} />
          <Summary data={this.state.data} result={this.state.result} />

          <Result result={this.state.result} />
        </div>
      </div>
    );
  }
}

export default App;
