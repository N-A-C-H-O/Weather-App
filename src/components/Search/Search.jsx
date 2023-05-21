import { useRef } from "react";
import "./Search.css";

const Search = ({ setInfo }) => {
  const form = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target[0].value;
    setInfo(inputValue);
    form.current.reset()
  };

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <label htmlFor="inputNameCity">Ingrese su ciudad</label>
      <input type="text" id="inputNameCity"/>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Search;
