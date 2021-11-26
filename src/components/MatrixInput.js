import React from 'react';
export class MatrixInput extends React.Component {
  
    render () {
  
      return (
        <div className="inputs">
          <div className="dimensions">
            <div>Rows:<input type="number" min="5" max="122" value={this.props.rowsNum} onChange={this.props.changeRows} /></div>   
            <div>Columns:<input type="number" min="6" max="122" value={this.props.columnsNum} onChange={this.props.ChangeColumns} /></div>
            <button onClick={this.props.generateInput}>Generate</button>
          </div> 
              
        </div>
      );
    }
  }

  export default MatrixInput;
