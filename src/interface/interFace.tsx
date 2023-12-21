export interface IQuery {
    action:string;
    firstinput:number;
    secondinput:number;
    [key: string]: unknown;
  }
  
export interface IAppProps {
    calcTag:unknown;
    qtag:unknown;
    setCalcTag:React.Dispatch<React.SetStateAction<boolean>>;
    setQtag:React.Dispatch<React.SetStateAction<boolean>>;
    actionRef:React.MutableRefObject<HTMLSelectElement | null>;
    firstinputRef:React.MutableRefObject<HTMLInputElement | null>;
    secondinputRef:React.MutableRefObject<HTMLInputElement | null>;
  }

export interface ICalculateQuery {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setAction: React.Dispatch<React.SetStateAction<string>>;
  setFirstinput: React.Dispatch<React.SetStateAction<number>>;
  setSecondinput: React.Dispatch<React.SetStateAction<number>>;
}

export interface ICountResult {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setAction: React.Dispatch<React.SetStateAction<string>>;
  actionRef:React.MutableRefObject<HTMLSelectElement | null>;
  setFirstinput: React.Dispatch<React.SetStateAction<number>>;
  firstinputRef:React.MutableRefObject<HTMLInputElement | null>;
  setSecondinput: React.Dispatch<React.SetStateAction<number>>;
  secondinputRef:React.MutableRefObject<HTMLInputElement | null>;
}

export interface ISelectChange {
  setAction: React.Dispatch<React.SetStateAction<string>>;
}
export interface IFirstInputChange{
  setFirstinput: React.Dispatch<React.SetStateAction<number>>;
}
export interface ISecondInputChange {
  setSecondinput: React.Dispatch<React.SetStateAction<number>>;
}

export interface ISetItemToQuery {
  setactiontoQuery:React.Dispatch<React.SetStateAction<IQuery[]>>
  query:IQuery[];
  action:string;
  firstinput:number;
  secondinput:number;
}


