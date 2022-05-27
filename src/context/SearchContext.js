import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const apikey = "563492ad6f91700001000001f0f1f74ec6814572866d9f6207bcd52d";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState("quey");
  const [orientation, setOrientation] = useState("");
  const navigate = useNavigate();

  // muda a pagina colocando a query
  function searchPhoto(value) {
    setQuery(value);
    navigate(`/photos/${value}${orientation}`);
  }

  function queryOrientation(orientation) {
    setOrientation(`?orientation=${orientation}`);
  }

  return (
    <SearchContext.Provider value={{ query, searchPhoto, queryOrientation }}>
      {children}
    </SearchContext.Provider>
  );
};
//SearchContext

export const useSearchContext = () => {
  return useContext(SearchContext);
};
