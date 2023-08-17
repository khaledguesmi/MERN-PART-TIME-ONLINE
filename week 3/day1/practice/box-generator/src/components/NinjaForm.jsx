import React, { useState } from 'react';

const NinjaForm = (props) => {
  const { ninjaBoxArray, setNinjaBoxArray } = props;
  const [ color, setColor] = useState("");
  const [ size, setSize] = useState(50);
  
  const submitHandler = (event) => {
    event.preventDefault();
    setNinjaBoxArray( [ 
      ...ninjaBoxArray, 
      { 
        color: color,
        size: size + "px",
      }
      ] );
    setColor("");
    setSize(50);
  }
  return (
    <div>
      <form onSubmit={ submitHandler } style={{ margin: "20px" }}>
        <div>
          <label>Color</label>
          <input 
            type="text" 
            name="color"
            value={color}
            onChange={ (e) => setColor(e.target.value) }
          />
        </div>
       
      </form>

  </div>
  )
}

export default NinjaForm;