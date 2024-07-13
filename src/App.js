import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Post1 from "./Components/Post1/Post1";

function App() {
  const [post, setPost] = useState({});
  const [number, setNumber] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [post1, setPost1] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${number}`)
      .then((res) => setPost(res.data))
      .catch((error) => console.error(error));
  }, [number]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = (e) => {
    e.preventDefault(); // Evita que el formulario se envíe
    setNumber(inputValue); // Actualiza el estado `number` con el valor del input
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPost1(res.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <div>
        <form>
          <input
            type="number"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button onClick={handleButtonClick}>Cambiar numero</button>
        </form>
      </div>
      <div>{/* <Post1 post1Prop={post1} /> */}</div>
    </div>
  );
}

export default App;
