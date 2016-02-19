import React from 'react'

export default (props) => {
  return (
    <div style={{paddingLeft: '30px'}}>
      <div className="radio">
        <label> <input type="radio" name="optradio"/>Todos </label>
      </div>
      <div className="radio">
        <label> <input type="radio" name="optradio"/>v1</label>
      </div>
      <div className="radio">
        <label> <input type="radio" name="optradio"/>v2</label>
      </div>
      <div className="radio">
        <label> <input type="radio" name="optradio"/>v3</label>
      </div>
    </div>
  );
}
