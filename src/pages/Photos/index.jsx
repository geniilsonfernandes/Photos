import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Dropdown, DropdownContext } from "../../components/Dropdown";
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
    };
    get();
  }, []);

  return (
    <Container>
      <Head />
      <DropdownContext>
        <Dropdown placeholder="teste" id='test'>
          <ul>
            <li>
              <a href="">oi</a>
              <a href="">oi</a>
              <a href="">oi</a>
              <a href="">oi</a>
              <a href="">oi</a>
            </li>
          </ul>
        </Dropdown>
      </DropdownContext>
      <Galery data={data} />
    </Container>
  );
};
