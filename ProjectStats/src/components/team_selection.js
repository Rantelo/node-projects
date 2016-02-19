import React from 'react'

export default (props) => {
  return (
    <div className="col-md-12" style={{marginBottom: '30px'}} >
      <label className="radio-inline">
        <input type="radio" name="optradio"/>Todos
      </label>
      <label className="radio-inline">
        <input type="radio" name="optradio"/>Team A
      </label>
      <label className="radio-inline">
        <input type="radio" name="optradio"/>Team B
      </label>
    </div>
  );
}
