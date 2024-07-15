import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [post, setPost] = useState({});
  const [number, setNumber] = useState(1);
  const [inputValue, setInputValue] = useState("");

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
    e.preventDefault();
    setNumber(inputValue);
  };

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
    </div>
  );
}

export default App;
