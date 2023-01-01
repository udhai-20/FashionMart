import React from 'react'
import ReactImageMagnify from "react-image-magnify";

function Magnifier({props}) {
    console.log(props)
  return (
    <div>
      <ReactImageMagnify
       {...props}
        {...{
          smallImage: {
            alt: "image-magnify",
            isFluidWidth: false,
            width:300,
            height: 350,
            src: `${props}`,
            isActivatedOnTouch:true,
            
          },
          lensStyle:{
            height:50
          },
          largeImage: {
            src: `${props}`,
            width:1000,
            height: 480,
          },
          enlargedImageContainerStyle: {
            zIndex: "1500",
          },
          enlargedImageContainerDimensions: {
            width: "100%",
            height: "100%",
          },
        }}
      />
    </div>
  )
}

export default Magnifier
