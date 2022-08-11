import React, { useState } from 'react';

import {
    ViroARScene,
    ViroConstants,
    ViroARImageMarker,
    ViroARTrackingTargets,
    ViroText,
    ViroImage,
    ViroVideo
  } from '@viro-community/react-viro';
  
  const ViroReactImageMarkerDemo = () => {
    const [text, setText] = useState('Initializing AR...');
    const [isMarkerFound, setMarkerFound] = useState(false)
  
    function onInitialized(state, reason) {
      if (state === ViroConstants.TRACKING_NORMAL) {
        setText('AR Demo');
      } else if (state === ViroConstants.TRACKING_NONE) {
        console.log("Tracking lost");
      }
    }

    function onAnchorFound() {
      console.log("video onAnchorFound")
      setMarkerFound(true)
    } 
   
    return (
      <ViroARScene onTrackingUpdated={onInitialized}>
        {!isMarkerFound && 
          <ViroText
            text={text}
            scale={[0.5, 0.5, 0.5]}
            position={[0, 0, -1]}
          />
        }
        <ViroARImageMarker target={"logo"} onAnchorFound={onAnchorFound} pauseUpdates={false}>
          {isMarkerFound && 
            <ViroImage
              height={0.3}
              width={0.5}
              position={[0,0,0]}
              rotation={[0,90,90]}
              placeholderSource={require("./../assets/image.png")}
              source={require("./../assets/business_card.png")}
            />
            // <ViroVideo
            //   source={require("./../assets/sample.mp4")}
            //   loop={true}
            //   position={[0,0,0]}
            //   rotation={[0,90,90]}
            //   scale={[0.3, 0.3, 0]}
            // />
          }
        </ViroARImageMarker>
      </ViroARScene>
    );
  };

  export default ViroReactImageMarkerDemo;

  ViroARTrackingTargets.createTargets({
    logo : {
      source : require('./../assets/avatar.png'),
      orientation : "Right",
      physicalWidth : 0.165 // real world width in meters
    }
  });