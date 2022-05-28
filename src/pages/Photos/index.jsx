import React, { useEffect, useState } from "react";
import Container from "../../components/Layout/Container";
import { useParams } from "react-router-dom";
import { Galery } from "../../components/Galery";
import { getImages } from "../../service/api";
import { Head } from "./Head";

export const Photos = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const get = async () => {
      const data = await getImages();
      setData(data.photos);
    };
    get();
  }, []);

  return (
    <Container>
      <Head />

      <Galery data={data} />
    </Container>
  );
};
