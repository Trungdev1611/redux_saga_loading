import "./styles.css";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  console.log("selectr", selector);
  function handleClick() {
    dispatch({
      type: "qua saga",
    });
  }

  if (selector.loading) {
    return <h2>Loading....</h2>;
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button onClick={handleClick}>Button Api Saga</button>

      <h2>Show data</h2>
      <ul>
        {selector?.data?.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}
