import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/home';

export default function App() {
  const state = useSelector((_state) => _state.home.value);
  const dispath = useDispatch();
  return (
    <div>
      {state}
      <button type="button" onClick={() => dispath(increment())}>increment</button>
      <button type="button" onClick={() => dispath(decrement())}>decrement</button>
    </div>
  );
}
