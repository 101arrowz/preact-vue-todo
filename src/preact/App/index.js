import TodoList from '../TodoList';
import useWebStorage from '../util/useWebStorage';
import { useRef } from 'preact/hooks';
const App = () => {
  let [data, setData] = useWebStorage('preact-todo', []);
  let inputRef = useRef(null);
  const updateData = () => {
    setData(data.concat({header: inputRef.current.value, subheader: 'Example Subheader', id: Math.max(...(data.map(el => el.id)), -1)+1}), false);
    inputRef.current.value = '';
  };
  return (
    <div style={{display: 'flex', flexDirection: 'column', margin: '0 auto', alignItems: 'center'}}>
      <TodoList data={data} setData={data => setData(data, false)} style={{width: '50vw'}} />
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
        <input ref={inputRef} onKeyPress={e => {if (e.charCode === 13) updateData()}} style={{textAlign: 'center'}} />
        <div onClick={updateData} class="button" style={{marginTop: '5%'}}>+</div>
      </div>
    </div>);
}
export default App;