import { ICalculateQuery,ICountResult } from '../interface/interFace';

function Calculate( action: string, firstinput: number, secondinput:number ): number | undefined {
  switch (action) {
    case '+':
      return firstinput + secondinput;
      break;
    case '-':
      return firstinput - secondinput;
      break;
    case '*':
      return firstinput * secondinput;
      break;
    case '/':
      return firstinput / secondinput;
      break;
    default:
      break;
  }
}

function CountResult({setVisible, setAction, actionRef, setFirstinput,firstinputRef, setSecondinput, secondinputRef}:ICountResult ) {
  setVisible(true);
  setAction(String(actionRef.current?.value));
  setFirstinput(Number(firstinputRef.current?.value));
  setSecondinput(Number(secondinputRef.current?.value));
}

function CalculateQuery(a:string,f:number,s:number,
    {setVisible, setAction, setFirstinput,setSecondinput }:ICalculateQuery ) {
    setVisible(true);
    setAction(a);
    setFirstinput(f);
    setSecondinput(s);
    }

export { Calculate, CountResult, CalculateQuery };