import { useState, useEffect } from "react";
import axios from "axios";

function FakeApp() {
  const [post, setPost] = useState({});
  const [number, setNumber] = useState(1);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts${number}`)
      .then((res) => setPost(res.data))
      .catch((error) => console.error(error));
  }, [number]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    e.preventDefault();
    setNumber(inputValue);
  };

  // console.log(post);
  return (
    <div>
      <form>
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
        ></input>
        <button onClick={handleButtonClick}>Cambiar numero</button>
      </form>
    </div>
  );
}

// 0. Leer la documentacion de la API, y/o usar POSTMAN para ver que trae cada endpoint.

// 1. Hacer un GET de la API con una URL fija y guardar el resultado en un estado. Podemos hacer console.log de ese estado por ahora.

// 2. Ya que ahora lo tenemos, pero solo de un endpoint fijo (por ejemplo posts/1), ahora lo quiero hacer dinamico, entonces no es solamente el 1, sino que puede ser lo que yo quiera. En este caso, podemos usar un estado "number", y ponerlo ahi. Por ahora podemos darle un valor fijo a ese "number", pero al menos ya tenemos un estado dentro de la URL

// 3. Ahora que ya tenemos el estado number, podemos hacer la interaccion con el usuario, cosa que le damos un input para que escriba un numero, y que cuando clickeemos "submit" en un boton, entonces "number" tome el valor que escribio el usuario. Para esto necesitamos:
// un input
// un button
// un estado que tenga el valor del input
// una funcion que actualice el valor del input onChange
// una funcion que actualice number con el estado del input en onClick

// Preguntas:
// linea 14 para que pongo number entre []
