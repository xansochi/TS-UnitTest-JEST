import React from 'react';

export default function FirstInput({...props}) {
  const {firstinputRef, FirstInputChange, setFirstinput} = props;
  return (
    <div className="calcform__firstinput">
    <label htmlFor="firstinput" className="calcform__firstinput-label">введите число</label>
      <input
      ref={firstinputRef}
      className="calcform__firstinput-input"
      onChange={(e)=>FirstInputChange(e,{setFirstinput})}
      type="number"
      id="firstinput"
      name="firstinput"
      required />
  </div>
  );
}
