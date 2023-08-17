import React, { useState } from 'react';

const Form = (props) => {
  const { boxColorArray, setBoxColorArray } = props;
  const [ color, setColor] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    setBoxColorArray( [ ...boxColorArray, color ] );
  }
  return (
    <div className="input-group mb-3">
      <form onSubmit={ submitHandler } style={{ margin: "20px" }}>
        <div>
          <label>Color</label>
          <input 
            type="text" 
            name="color"
            onChange={ (e) => setColor(e.target.value) }
          />
        <button  id="button-addon2" className="btn btn-outline-secondary" >Add</button>
        </div>
        
      </form>
     
  </div>
  )
}

export default Form;