import React, { useEffect, useState } from "react";
import { Galery } from "../../components/Galery";
import Container from "../../components/Layout/Container";
import { getImages } from "../../service/api";
import { Head } from "./Head";

export const Photos = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const get = async () => {
      const data = await getImages();
      setData(data.photos);
      console.log(data);
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
