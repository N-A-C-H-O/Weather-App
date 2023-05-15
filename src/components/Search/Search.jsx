const Search = () => {
  return(
    <form>
        <div>
            <label htmlFor="inputNameCity">Ingrese su ciudad</label>
            <input type="text" id="inputNameCity"/>
        </div>
        <button type="submit">Enviar</button>
    </form>
  );
};

export default Search;
