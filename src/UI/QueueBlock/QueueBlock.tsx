import { IQuery } from '../../interface/interFace';

export default function QueueBlock({...props}) {
    const { query, setQtag, qtag, CalculateQuery,
        setVisible, setAction, setFirstinput, setSecondinput,
        setDivResult, firstinput, action, secondinput, result
    } = props;
  return (
    <>
    {query.map((e:IQuery, index:number) => (
        <div key={index} className="calc__queryform">
            <div>{e.firstinput}{e.action}{e.secondinput}</div>
            <button className="button"
            onClick={()=>{
              setQtag(!qtag);
              CalculateQuery(query[index].action,query[index].firstinput,query[index].secondinput,
              {setVisible, setAction, setFirstinput, setSecondinput});
              setDivResult(()=>`${firstinput} ${action} ${secondinput}  = ${result}`);
            }}>Посчитать это</button>
        </div>
      ))}
      </>
  );
}
