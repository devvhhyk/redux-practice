import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Box from "./component/Box";

function App() {
  let count = useSelector((state) => state.count);
  let id = useSelector((state=>state.id))
  let password=useSelector((state=>state.password))
  const dispach = useDispatch();

  const increase = () => {
    dispach({ type: "INCREMENT", payload: { num: 5 } });
  };

  const decrease = ()=> {
    dispach({type: "DECREMENT", payload: {number: -1}});
  }

  const login = () => {
    dispach({ type: "Login", payload: { id: "yk", password: "1234" } });
  };

  return (
    <div>
      <h1>{id},{password}</h1>
      <h1>{count}</h1>
      <button onClick={increase}>증가</button>
      <button onClick={login}>Login</button>
      <button onClick={decrease}>감소</button>
      <Box />
    </div>
  );
}

export default App;
