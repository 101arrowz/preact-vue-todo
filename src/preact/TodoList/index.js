import { useState } from 'preact/hooks';
const TRANSITION_SPEED = 200;
const TodoListItem = ({ data, style, removeSelf, ...props }) => {
  let [opacity, setOpacity] = useState(1);
  return (<div class="list-item" style={{ transition: `opacity ${TRANSITION_SPEED}ms ease-in-out`, opacity: opacity.toString(), ...style }} {...props}>
    {data.img && <img src={data.img} />}
    <div style={{ flexDirection: 'column', textAlign: 'left' }}>
      <div style={{fontSize: '150%'}}>{data.header}</div>
      {data.subheader && <div style={{fontSize: '75%'}}>{data.subheader}</div>}
    </div>
    <div onClick={() => {
      setTimeout(removeSelf, TRANSITION_SPEED);
      setOpacity(0);
    }} class="button">&times;</div>
  </div>);
};
const TodoList = ({ data, setData, style, ...props }) => (
  <div style={{transition: 'height 100ms ease-in-out', textAlign: 'center', ...style}} {...props}>
    {data.length ? data.map(el => <TodoListItem key={el.id} data={el} removeSelf={() => setData(data.filter(e => e !== el))} />) : <div style={{fontSize: '150%'}}>Nothing to do!</div>}
  </div>);
export default TodoList;