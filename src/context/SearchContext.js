import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchContext = createContext();
// config 
// aqui vai guarda o estdos da querys orietação, cor,
// tamanho e vai montar o url
// 

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
