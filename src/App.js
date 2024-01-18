import "./App.css";
import { useState } from "react";
import Joke from "./joke";

function App() {
  const [data, setdata] = useState(null);
  const handleClick = async () => {
    let response = await fetch(
      "https://v2.jokeapi.dev/joke/Programming?type=single"
    );
    let call = await response.json();
    setdata(call);
    // console.log(typeof data);
  };
  // useEffect(() => {
  //   // console.log(typeof data);
  // }, [data]);
  return (
    <div className="h-screen sm:text-sm grid relative bg-gradient-to-br from-green-400 to-blue-500 p-8 rounded-md backdrop-filter backdrop-blur-lg border border-white ">
      <div className="mx-auto my-auto relative box p-8 rounded-md backdrop-filter backdrop-blur-lg border">
        <h3 className="font text-2xl lg:text-5xl">LaughScript Generator</h3>

        {data != null ? (
          <Joke data={data} />
        ) : (
          <h2 className="error lg:text-3xl text-xl mt-7">Click on Generate</h2>
        )}
        <button
          className="bg-blue-500 lg:text-xl text-lg hover:bg-blue-700 text-white font-bold py-2 px-4 mt-10 rounded font-btn"
          onClick={handleClick}
        >
          LaughLoader
        </button>
      </div>
    </div>
  );
}

export default App;
