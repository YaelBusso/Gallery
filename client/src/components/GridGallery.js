import React, { useState, useEffect } from "react";
import Gallery from "react-photo-gallery";
import { Navbar, Container, Nav } from "react-bootstrap";
import { SRLWrapper } from "simple-react-lightbox";
import Photo from "./Photo";
import arrayMove from "array-move";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { useSelector, useDispatch } from "react-redux";
import { fetchImages, selectAllImages } from "../features/imagesSlice";
import * as api from "../api/index.js";
import { photos } from "./photos";
import { Spinner } from "react-bootstrap";
import Icon from "./Icon";

const SortablePhoto = SortableElement((item) => <Photo {...item} />);

const GridGallery = () => {
  //   const imageList = useSelector((state) => state.imageList.value);
  const [isProduction, setisProduction] = useState(true);
  const [lightbox, setLightbox] = useState(true);
  const [gridType, setgridType] = useState("row");
  console.log("======--------=======");

  const dispatch = useDispatch();
  const imageList = useSelector(selectAllImages);
  const imageStatus = useSelector((state) => state.imageList.status);
  const [items, setItems] = useState(photos);

  useEffect(() => {
    if (imageStatus === "idle") {
      dispatch(fetchImages());
    }
  }, [imageStatus, dispatch]);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  //To custom lightbox...
  const options = {
    // settings: {
    // 	overlayColor: 'rgb(25, 136, 124)',
    // 	autoplaySpeed: 1500,
    // 	transitionSpeed: 900
    // },
    // buttons: {
    // 	backgroundColor: 'red',
    // 	iconColor: 'rgba(126, 172, 139, 0.8)'
    // },
    // caption: {
    // 	captionColor: '#a6cfa5',
    // 	captionFontFamily: 'Raleway, sans-serif',
    // 	captionFontWeight: '300',
    // 	captionTextTransform: 'uppercase'
    // },
    // progressBar: {
    // 	height: '20px',
    // 	fillColor: 'blue',
    // 	backgroundColor: 'white'
    // }
  };

  const SortableGallery = SortableContainer(({ items }) => (
    <Gallery
      photos={items}
      direction={gridType === "row" ? "row" : "column"}
      renderImage={(props) => <SortablePhoto {...props} />}
    />
  ));

  return !imageList ? (
    <Spinner animation="border" variant="secondary" />
  ) : (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">MyGallery:)</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link onClick={() => setgridType("row")}>
                <Icon name="row" /> Row Mode
              </Nav.Link>
              <Nav.Link onClick={() => setgridType("column")}>
                <Icon name="col" /> Column Mode
              </Nav.Link>
              <Nav.Link onClick={() => setLightbox(!lightbox)}>
                <Icon name="lightbox" /> Toggle LightBox
              </Nav.Link>
              <Nav.Link onClick={() => setisProduction(!isProduction)}>
                <Icon name="eye" /> Toggle Drag and Drop Display{" "}
              </Nav.Link>
              <Nav.Link
                eventKey={2}
                href="https://github.com/YaelShrem/Gallery"
              >
                <Icon name="githubLogo" /> View Source Code
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {isProduction === false ? (
        <SortableGallery items={items} onSortEnd={onSortEnd} axis={"xy"} />
      ) : lightbox === true ? (
        <SRLWrapper options={options}>
          <Gallery
            photos={items}
            direction={gridType === "row" ? "row" : "column"}
          />
        </SRLWrapper>
      ) : (
        <Gallery photos={items} />
      )}
    </>
  );
};

export default GridGallery;
