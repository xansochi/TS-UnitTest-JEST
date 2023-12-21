import { useState, useEffect, useMemo } from 'react';
import { Calculate, CountResult, CalculateQuery } from './events/calculate';
import { SelectChange, FirstInputChange, SecondInputChange, SetItemToQuery } from './events/handleevents';
import { WithApp } from './hoc/TagHoc';
import { IQuery, IAppProps} from './interface/interFace';
import ActionSelect from './UI/ActionSelect/ActionSelect';
import FirstInput from './UI/FirstInput/FirstInput';
import SecondInput from './UI/SecondInput/SecondInput';
import Queuebutton from './UI/QueueButton/QueueButton';
import IsVisibleBlock from './UI/IsVisibleBlock/IsVisibleBlock';
import QueueBlock from './UI/QueueBlock/QueueBlock';
import './App.css';
import FormHoc from './hoc/FormHoc';

export function App({calcTag, qtag, setCalcTag, setQtag, actionRef, firstinputRef, secondinputRef}:IAppProps) {
  const [result, setResult] = useState<number | undefined>(0);
  const [firstinput, setFirstinput] = useState(0);
  const [secondinput, setSecondinput] = useState(0);
  const [action, setAction] = useState('+');
  const [query, setactiontoQuery] = useState<IQuery[]>([]);
  const [visible, setVisible] = useState(false);
  const [divResult, setDivResult] = useState('');

  useEffect(() => setResult(Calculate(action,firstinput,secondinput)), [calcTag]);
  useEffect(() => setResult(Calculate(action,firstinput,secondinput)), [qtag]);
  useEffect(() => console.log('re-render because result changed:', result), [result]);

  useMemo(() => setDivResult(()=>`${firstinput} ${action} ${secondinput}  = ${result}`), [result]);

  return (
    <main className="mainlayer">
      <h1 className="textheader" data-testid="custom-element">форма для расчетов</h1>
      <FormHoc
          setCalcTag={setCalcTag} calcTag={calcTag} setVisible={setVisible}
          setAction={setAction} actionRef={actionRef} setFirstinput={setFirstinput}
          firstinputRef={firstinputRef} setSecondinput={setSecondinput}
          secondinputRef={secondinputRef} CountResult={CountResult}
          firstinput={firstinput} setDivResult={setDivResult} 
          action={action} secondinput={secondinput} result={result} >
 
          <FirstInput   firstinputRef={firstinputRef}
                        FirstInputChange={FirstInputChange}
                        setFirstinput={setFirstinput}/>

          <ActionSelect actionRef={actionRef}
                        SelectChange={SelectChange}
                        setAction={setAction} />

          <SecondInput secondinputRef={secondinputRef}
                        SecondInputChange={SecondInputChange}
                        setSecondinput={setSecondinput}/>

          <Queuebutton SetItemToQuery={SetItemToQuery}
                        setactiontoQuery={setactiontoQuery}
                        query={query}
                        firstinput={firstinput}
                        secondinput={secondinput}
                        action={action}/>
      </FormHoc>
        <IsVisibleBlock visible={visible} divResult={divResult}/>
      <div>
        <QueueBlock query={query} setQtag={setQtag} qtag={qtag}
                    CalculateQuery={CalculateQuery} setVisible={setVisible}
                    setAction={setAction} setFirstinput={setFirstinput}
                    setSecondinput={setSecondinput} setDivResult={setDivResult}
                    firstinput={firstinput} action={action}
                    secondinput={secondinput} result={result}/>
    </div>
    </main>
  );
}

export default WithApp(App);