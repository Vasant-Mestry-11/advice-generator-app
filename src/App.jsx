import { useEffect, useState } from "react";
import Advice from "./components/Advice";
import { getAdvice } from "./services/AdviceService";

function App() {
  const [quote, setQuote] = useState({});

  const getData = async () => {
    const data = await getAdvice();
    setQuote(data.slip);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="app">
      <Advice quote={quote} handleClick={getData} />
    </div>
  );
}

export default App;
