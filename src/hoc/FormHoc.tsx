export default function FormHoc({...props}) {
  const { children, setCalcTag, setVisible,
          setAction, actionRef, setFirstinput,
          firstinputRef, setSecondinput, secondinputRef,
          CountResult,firstinput,setDivResult,
          action,secondinput,result,calcTag} = props;
  return (
    <div className="calc">
    <form action="submit" className="calcform" 
          onSubmit={(e) => {
          e.preventDefault();
          console.log('click');
          console.log(result);
          setCalcTag(!calcTag);
          CountResult({setVisible, setAction, actionRef, setFirstinput, firstinputRef, setSecondinput, secondinputRef});
          setDivResult(()=>`${firstinput} ${action} ${secondinput} = ${result}`);
        }}>
          {children}
    </form> 
  </div>
  );
}



