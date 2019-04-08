import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Result extends Component {
  render() {
    const result = this.props.result;
    const mensaje = !result
      ? "Elije marca, año, y tipo de seguro."
      : "El total es: ";
    return (
      <div className="gran-total">
        {mensaje}
        <TransitionGroup component="span" className="resultado">
          <CSSTransition
            classNames="resultado"
            key={result}
            timeout={{ enter: 500, exit: 500 }}
          >
            <span>{result}</span>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}
export default Result;
