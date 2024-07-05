import { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [joke, setJoke] = useState("Click on the button to genrate the jokes");
  const [bg, setBg] = useState("");
  const genrateJoke = async () => {
    try {
      const url = "https://jokes-api-nfrh.onrender.com/joke/random";
      const data = await axios.get(url);
      const { joke, image } = data.data;
      setJoke(joke);
      setBg(image);
      console.log(joke, image);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div
        className="h-screen w-screen flex justify-center items-center "
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 0.5s ease-in-out",
        }}
      >
        <div className="flex flex-col gap-5 p-10 bg-opacity-50 bg-black rounded-xl items-center">
          <h1 className="font-mono font-semibold text-center">
            Generate Jokoes
          </h1>
          <p className="font-mono text-xl">{joke}</p>
          <button className="font-mono " onClick={genrateJoke}>
            Generate Joke
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
