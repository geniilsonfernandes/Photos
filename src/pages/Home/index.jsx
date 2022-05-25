import React, { useEffect, useState } from "react";
import { Galery } from "../../components/Galery";
import { GaleryTabs } from "../../components/GaleryTabs";
import { Header } from "../../components/Header";
import { Navegation } from "../../components/Navegation";
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
      console.log(data);
    };
    get();
  }, []);

  function changerTabActive(id) {
    setTabActive(id);
  }

  return (
    <>
      <Navegation />
      <Header />
      <span className="log"> log: tabative = {tabActive}</span>
      <GaleryTabs
        tabs={tabs}
        tabActive={tabActive}
        changerTabActive={changerTabActive}
      />
      <Galery data={data} />
    </>
  );
};
