import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Galery } from "../../components/Galery";
import Container from "../../components/Layout/Container";
import { getImages } from "../../service/api";
import { Head } from "./Head";

export const Photos = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const get = async () => {
      const data = await getImages();
      setData(data.photos);
      console.log(data);
    };
    get();
  }, []);

  console.log(id);

  return (
    <Container>
      <Head />

      <Galery data={data} />
    </Container>
  );
};
