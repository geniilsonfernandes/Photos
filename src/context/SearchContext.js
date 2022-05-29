import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchContext = createContext();
//

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  // filters
  const [filters, setFilter] = useState(null);
  const [filterUrl, setFilterUrl] = useState("");
  const [orientation, setOrientation] = useState(null);
  const [color, setColor] = useState(null);
  // muda a pagina colocando a query
  function searchPhoto(value) {
    setQuery(value);
    navigate(`/photos/${value}`);
  }
  useEffect(() => {
    if (filters) {
      setFilterUrl(
        `${color ? "&color=" + color : ""}${
          orientation ? "&orientation=" + orientation : ""
        }`
      );
    } else {
      setFilterUrl("");
    }
  }, [orientation, color, filters]);
  useEffect(() => {
    if (filters) {
      navigate(`/photos/${query}${filterUrl}`);
    }
  }, [orientation, color, filters, query, navigate, filterUrl]);

  return (
    <SearchContext.Provider
      value={{
        query,
        searchPhoto,
        setOrientation,
        setColor,
        setFilter,
        filters,
        filterUrl,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
//SearchContext

export const useSearchContext = () => {
  return useContext(SearchContext);
};
