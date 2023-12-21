import React from 'react';

export default function ActionSelect({...props}) {
  const {actionRef, SelectChange, setAction} = props;
  return (
    <div className="calcform__actionselect">
    <label htmlFor="action" className="calcform__actionselect-input"></label>
      <select
      ref={actionRef}
      className="calcform__actionselect-label"
      required
      onChange={(e)=>SelectChange(e,{setAction})}
      id="action"
      name="action">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">⊛</option>
        <option value="/">/</option>
      </select>
    </div>
  );
}