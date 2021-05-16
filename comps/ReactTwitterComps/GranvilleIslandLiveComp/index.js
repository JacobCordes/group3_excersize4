import React from "react";
import { Timeline } from 'react-twitter-widgets'

export const GranvilleIslandLive = ({

}) => {
    return <Timeline
      dataSource={{ sourceType: "profile", screenName: "granville_isle" }}
      options={{ width: "310", height: "600" }}
    />
  };


  export default GranvilleIslandLive

  