export default function QueueButton({...props}) {
    const {SetItemToQuery, setactiontoQuery, query, firstinput, secondinput, action} = props;
  return (
    <>
    <button
    className="button"
    type="submit"
    >Вычислить</button>
    <button 
    className="button"
    type="button"
    onClick={()=>SetItemToQuery({setactiontoQuery, query, firstinput, secondinput, action})}
    >Добавить в очередь</button>
    </>
  );
}
