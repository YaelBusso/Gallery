import React, {useState} from 'react'
import Gallery from "react-photo-gallery";
import { SRLWrapper } from 'simple-react-lightbox';
import Photo from "./Photo";
import arrayMove from "array-move";
import { SortableContainer, SortableElement } from "react-sortable-hoc";

import { photos } from "./photos";

const SortablePhoto = SortableElement(item => <Photo {...item} />);

const SortableGallery = SortableContainer(({ items }) => (
    <Gallery photos={items} renderImage={props => <SortablePhoto {...props} />} />
));

const GridGallery = () => {
    //just for here
    const [isProductionMode, setisProductionMode] = useState(false);
    
    const [items, setItems] = useState(photos);

    const onSortEnd = ({ oldIndex, newIndex }) => {
        setItems(arrayMove(items, oldIndex, newIndex));
    };

    //To next step of custom lightbox...
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


    return (
        <div >
        {/* <Gallery photos={photos} direction={"column"} /> */}
        { (isProductionMode==false)?
            <SortableGallery items={items} onSortEnd={onSortEnd} axis={"xy"} />
      :
        <SRLWrapper options={options}>
        <Gallery photos={photos}/>
        </SRLWrapper>}
        </div>
    )
}

export default GridGallery;

//TODO: column state, resize div, dynamic images size