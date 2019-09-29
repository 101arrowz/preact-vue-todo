import Item from './Item';
const TodoList = ({ data, setData, style, ...props }) => (
  <div style={{ textAlign: 'center', ...style}} {...props}>
    {data.length ? data.map(el => <Item key={el.id} data={el} removeSelf={() => setData(data.filter(e => e !== el))} />) : <div style={{fontSize: '150%'}}>Nothing to do!</div>}
  </div>);
export default TodoList;