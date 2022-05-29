import React, { useEffect, useState } from "react";
import Container from "../../components/Layout/Container";
import { Galery } from "../../components/Galery";
import { searchImages } from "../../service/api";
import { Head } from "./Head";
import { useParams } from "react-router-dom";
import { useSearchContext } from "../../context/SearchContext";

export const Photos = () => {
  const { filterUrl } = useSearchContext();
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      const data = await searchImages(id, filterUrl);
      setData(data.photos);

      console.log("oi");
      setLoading(false);
    };
    get();
  }, [filterUrl, id]);

  return (
    <Container>
      <Head />
      <Galery data={data} loading={loading} />
    </Container>
  );
};
