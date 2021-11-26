import React from "react";
class InputSquare extends React.Component {
      render () {
      const inputSquare = <span id={this.props.id} className="square">{this.props.value}</span>
      const coloredSquare = <span id={this.props.id} className="square coloredSquare">{this.props.value}</span>
  
      return (
        this.props.colored ? coloredSquare: inputSquare 
      );
    }
  }
  export default InputSquare;