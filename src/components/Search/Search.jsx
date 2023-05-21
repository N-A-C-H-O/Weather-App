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
      <label htmlFor="inputNameCity">Type your city</label>
      <div>
        <input type="text" id="inputNameCity" placeHolder="City name" autoComplete="off"/>
        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default Search;
