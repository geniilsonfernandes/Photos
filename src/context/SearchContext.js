import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("quey");
  const [orientation, setOrientation] = useState("");
  const navigate = useNavigate();

  // muda a pagina colocando a query
  function queryPhoto(value) {
    setQuery(value);
    navigate(`/photos/${value}${orientation}`);
  }

  function queryOrientation(orientation) {
    setOrientation(`?orientation=${orientation}`);
  }

  return (
    <SearchContext.Provider
      value={{ data, query, queryPhoto, queryOrientation }}
    >
      {children}
    </SearchContext.Provider>
  );
};
//SearchContext

export const useSearchContext = () => {
  return useContext(SearchContext);
};
