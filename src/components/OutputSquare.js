import React from "react";


class OutputSquare extends React.Component {
  
    render () {
      const id = this.props.id;
     
      const outputSquare = <button id={this.props.id} className="square outputSquare" onClick={() => this.props.handleClick(id)}>{this.props.value}</button>
      const clickedSquare = <button id={this.props.id} className="square outputSquare clickedSquare" onClick={() => this.props.handleClick(id)}>{this.props.value}</button>
      const unclickableSquare = <button id={this.props.id} className="square outputSquare unclickableSquare" >{this.props.value} </button>
      const nullSquare = <div className="square outputSquare unclickableSquare"></div>
  
      const clicked = this.props.clicked
      const stringId =  id.toString();
      const unclickable = stringId[0] == 0 || stringId[1] == 0;
      const isNull = id == 0;
  
      return (
        isNull ? nullSquare : unclickable ? unclickableSquare : clicked ? clickedSquare : outputSquare 
      );
    }
  }

  export default OutputSquare;