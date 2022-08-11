import React from 'react';
import { ViroARSceneNavigator } from '@viro-community/react-viro';
import ViroReactImageMarkerDemo from './src/components/ViroReactImageMarkerDemo';

export default App = () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: ViroReactImageMarkerDemo,
      }}
      style={{flex: 1}}
    />
  );
};
