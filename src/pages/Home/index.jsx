import React, { useEffect, useState } from "react";
import { Galery } from "../../components/Galery";
import { Tabs } from "../../components/Tabs";
import { Header } from "../../components/Header";
import { getImages } from "../../service/api";

const tabs = [
  {
    id: 1,
    name: "Popular",
  },
  {
    id: 2,
    name: "Collections",
  },
  {
    id: 3,
    name: "Featured",
  },
];

export const Home = () => {
  const [data, setData] = useState([]);
  const [tabActive, setTabActive] = useState(1);

  useEffect(() => {
    const get = async () => {
      const data = await getImages();
      setData(data.photos);
    };
    get();
  }, []);

  function changerTabActive(id) {
    setTabActive(id);
  }

  return (
    <>
      <Header />
      <Tabs
        tabs={tabs}
        tabActive={tabActive}
        changerTabActive={changerTabActive}
      />
      <Galery data={data} />
    </>
  );
};
