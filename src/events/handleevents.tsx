import { ISelectChange, IFirstInputChange, ISecondInputChange,ISetItemToQuery } from '../interface/interFace';

const SelectChange = (event:React.ChangeEvent<HTMLSelectElement>,{setAction}:ISelectChange) => {
    const value = event.target.value;
    setAction(value);
  };

const FirstInputChange = (event: React.ChangeEvent<HTMLInputElement>,{setFirstinput}:IFirstInputChange) => {
  const value = event.target.value;
  setFirstinput(Number(value));
};

const SecondInputChange = (event: React.ChangeEvent<HTMLInputElement>,{setSecondinput}:ISecondInputChange) => {
  const value = event.target.value;
  setSecondinput(Number(value));
};

const SetItemToQuery = ({setactiontoQuery, query, firstinput, secondinput, action}:ISetItemToQuery) => {
  setactiontoQuery(() => [
      ...query,
      {
        'firstinput':firstinput,
        'secondinput':secondinput,
        'action':action
      },
  ]);
};

export {SelectChange, FirstInputChange, SecondInputChange, SetItemToQuery};