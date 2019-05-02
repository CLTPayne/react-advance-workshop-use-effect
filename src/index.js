import React, { useState } from "react";
import ReactDOM from "react-dom";
import catsApi from "./catApi";
import useApi from "./useApi";

const App = () => {
  let [query, setQuery] = useState("Cats cats cats");
  let [{ data, loading }] = useApi(catsApi, query);
  console.log(data);

  return (
    <div className="App">
      <h1>
        <a href="https://cataas.com/">cataas.com</a> with react hooks
      </h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          setQuery(e.target.query.value);
        }}
      >
        <input placeholder="This cat is..." type="text" name="query" />
        <button>Submit</button>
      </form>

      <br />
      {loading ? "Ummmm wait..." : <img src={data} alt={query} />}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
