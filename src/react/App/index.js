import TodoList from '../TodoList';
import useWebStorage from '../util/useWebStorage';
import React, { useRef } from 'react';
const App = () => {
  let [data, setData] = useWebStorage('react-todo', []);
  let inputRef = useRef(null);
  const updateData = () => {
    const header = inputRef.current.value;
    if (header) {
      setData(data.concat({header, subheader: 'Example Subheader', id: Math.max(...(data.map(el => el.id)), -1)+1}), false);
      inputRef.current.value = '';
    }
  };
  return (
    <div style={{display: 'flex', flexDirection: 'column', margin: '0 auto', alignItems: 'center' }}>
      <div style={{fontSize: '200%'}}>React Todo</div>
      <TodoList data={data} setData={data => setData(data, false)} style={{width: '50vw'}} />
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop: '1vh'}}>
        <input ref={inputRef} onKeyPress={e => {if (e.charCode === 13) updateData()}} style={{textAlign: 'center'}} />
        <div onClick={updateData} className="button" style={{marginTop: '1vh'}}>+</div>
      </div>
    </div>);
}
export default App;