import { incNumber } from './actions';
import { decNumber } from './actions';
import './App.css';
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
function App() {
const myState=useSelector((state)=>state.changeTheNumber);
const dispatch=useDispatch();
  return (
    <div className="App">
<h1>Increment/Decrement counter</h1>
<h4>using React and Redux</h4>
<div className='quantity'>
  <button className='quantityminus' onClick={()=>dispatch(decNumber())} title='decrement'><span>-</span></button>
  <input name='quantity' type="text" className='quantityinput' value={myState}/>
  <button className='quantityplus' onClick={()=>dispatch(incNumber())} title="increment"><span>+</span></button>
</div>
    </div>
  );
}

export default App;
