import React, {useState} from 'react'
import Gallery from "react-photo-gallery";
import { SRLWrapper } from 'simple-react-lightbox';
import Photo from "./Photo";
import arrayMove from "array-move";
import { SortableContainer, SortableElement } from "react-sortable-hoc";

import { photos } from "./photos";

const SortablePhoto = SortableElement(item => <Photo {...item} />);

const GridGallery = () => {
    //just for here
    const [isProduction, setisProduction] = useState(true);
    const [lightbox, setLightbox] = useState(true);
    const [gridType, setgridType] = useState("row");


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

    const SortableGallery = SortableContainer(({ items }) => (
        <Gallery photos={items}
                 direction={(gridType=='row')? "row": "column"}
                 renderImage={props => <SortablePhoto {...props} />} />
    ));
    
    return (
        <div >
        <button onClick={()=>setisProduction(!isProduction)}>Change eye mode</button>
        <button onClick={()=>setLightbox(!lightbox)}>Toogle LightBox mode</button>
        <button onClick={()=>setgridType("column")}>Column Mode</button>
        <button onClick={()=>setgridType("row")}>Rows Mode</button>

        { (isProduction==false)?
            <SortableGallery items={items} onSortEnd={onSortEnd} axis={"xy"} />
      :
      ((lightbox==true)?
        <SRLWrapper options={options}>
        <Gallery photos={items} direction={(gridType=='row')? "row": "column"}/>
        </SRLWrapper>:
        <Gallery photos={items}/>)
        }
        </div>
    )
}

export default GridGallery;

//TODO: column state, resize div, dynamic images size
