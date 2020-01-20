import React, {Component} from 'react';
import './Button.css';



class Button extends Component {
isOperator = val => {
    // hvis det ikke er et nummer, og hvis det ikke er et tegn . eller =, så skal det have farven orange
    return !isNaN(val) || val === "." || val === "=";
}


    render() {
  return (

    // angiver at alle operators skal have en orange farve
    <div className={`button ${this.isOperator(this.props.children) ? "" : "operator"}`}

    onClick={() => this.props.handleClick
    (this.props.children)
    }
    >
        {this.props.children}
</div>
  );
    }
}

export default Button;
