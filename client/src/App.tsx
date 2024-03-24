import "./style/_main.scss";
import useAppContext from "./hooks/useAppContext";

function App() {
  const { jobs } = useAppContext();
  console.log(jobs);
  return (
    <>
      <h1>Hello from the other side</h1>
    </>
  );
}

export default App;
