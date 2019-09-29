import { useState } from 'preact/hooks';
const TRANSITION_SPEED = 200;
const Item = ({ data, style, removeSelf, ...props }) => {
  let [opacity, setOpacity] = useState(1);
  return (<div class="list-item" style={{ transition: `opacity ${TRANSITION_SPEED}ms ease-in-out`, opacity: opacity.toString(), ...style }} {...props}>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {data.img && <img src={data.img} style={{ width: '15%', height: 'auto', objectFit: 'cover', marginRight: '1%' }} />}
      <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
        <div style={{fontSize: '150%'}}>{data.header}</div>
        {data.subheader && <div style={{fontSize: '75%'}}>{data.subheader}</div>}
      </div>
    </div>
    <div onClick={() => {
      setTimeout(removeSelf, TRANSITION_SPEED);
      setOpacity(0);
    }} class="button">&times;</div>
  </div>);
};
export default Item;