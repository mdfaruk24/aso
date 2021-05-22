import React, { Component } from 'react';
import {
    Magnifier,
    GlassMagnifier,
    SideBySideMagnifier,
    PictureInPictureMagnifier,
    MOUSE_ACTIVATION,
    TOUCH_ACTIVATION
  } from "react-image-magnifiers";

export default class ImageZoom extends Component {
    render() {
        const {image} = this.props;

        return (

            <SideBySideMagnifier
            imageSrc={`${image}`}
            largeImageSrc={`${image}`}
            />
            


            // <img src={`${image}`}  className="img-fluid image_zoom_cls-0" />
        );
    }
}