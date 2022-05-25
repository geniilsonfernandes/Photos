import React, { useEffect, useState } from "react";
import { Galery } from "../../components/Galery";
import { Header } from "../../components/Header";
import { Navegation } from "../../components/Navegation";
import { getImages } from "../../service/api";

export const Home = () => {
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
    <>
      <Navegation />
      <Header />
      <Galery data={data} />
    </>
  );
};
