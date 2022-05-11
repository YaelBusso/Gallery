import React, { useEffect } from "react";
import Header from "./Header";
import Stage from "./Stage";

import { useSelector, useDispatch } from "react-redux";
import { getImages, updateImage } from "../features/imagesSlice";
import * as api from "../api/index.js";

const App = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     await api.fetchImages().then((response) => {
  //       dispatch({ type: getImages, payload: response });
  //     });
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <Header />
      <div
        style={{
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Stage />
      </div>
    </>
  );
};

export default App;
