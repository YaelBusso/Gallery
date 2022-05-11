import React, { useEffect } from "react";
import GridGallery from './GridGallery'

import { useDispatch } from "react-redux";
import { getImages } from "../features/imagesSlice";
import * as api from "../api/index.js";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      await api.fetchImages().then((response) => {
        dispatch({ type: getImages, payload: response });
      });
    };

    fetchData();
  }, []);

  return (
    <>
      <GridGallery/>
    </>
  );
};

export default App;
