import React from 'react';

export default function SecondInput({...props}) {
    const {secondinputRef, SecondInputChange, setSecondinput} = props;
  return (
    <div className="calcform__secondinput">
    <label htmlFor="secondinput" className="calcform__secondinput-label">введите число</label>
      <input
      ref={secondinputRef}
      className="calcform__secondinput-input"
      onChange={(e)=>SecondInputChange(e,{setSecondinput})}
      type="number"
      id="secondinput"
      name="secondinput"
      required
      />
  </div>
  );
}
