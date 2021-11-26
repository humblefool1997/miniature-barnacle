import React from "react";
class OffsetInput extends React.Component {
   
  
    render () {
  
      return (
        <div className="inputs">
          <div className="offsets">
            <div>Distance Offset:<input type="number" min="1" value={this.props.distanceInput} onChange={this.props.handleDistanceChange} placeholder="Distance 1,2, 3,..." /></div>   
            <div>Direction Offset:
              <select id="select" onChange={this.props.handleDirectionChange}>
                  <option value={0}>0</option>
                  <option value={45}>45</option>
                  <option value={90}>90</option>
                  <option value={135}>135</option>
                  
              </select>
              


            </div>
          </div> 
              
        </div>
      );
    }
  }

  export default OffsetInput;