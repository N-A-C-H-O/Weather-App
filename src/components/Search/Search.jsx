const Search = ({ setInfo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target[0].value;
    setInfo(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="inputNameCity">Ingrese su ciudad</label>
        <input type="text" id="inputNameCity" />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Search;
