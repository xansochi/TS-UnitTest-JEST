export default function IsVisibleBlock({...props}) {
    const {visible, divResult} = props;
  return (
    <>
    { visible &&  <div className="calc__resultform">
    { `${divResult}`}
    </div> }
    </>
  );
}
