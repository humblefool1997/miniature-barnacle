import React from "react";
import InputSquare from "./InputSquare";
import OutputSquare from "./OutputSquare";
class Matrix extends React.Component {
    render () {
      const matrix = this.props.matrix.map((row, rowId) => {
        return <div className="row">{row.map((number, numberId) => {
          const id = rowId + "" + numberId;
          return this.props.type == "input" ? <InputSquare value={number} id={id} colored={this.props.coloredSquares.includes(id)} /> : 
          <OutputSquare value={number} id={id} handleClick={this.props.handleClick} clicked={this.props.clickedSquareId == id} />
        })}</div>
      });
  
      return (
        <div className="matrix">{matrix}</div>
      );
    }
  }
  export default Matrix;