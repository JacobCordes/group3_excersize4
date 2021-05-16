import React from "react";
import { Timeline } from 'react-twitter-widgets'

export const KitsilanoLive = ({

}) => {
    return <Timeline
      dataSource={{ sourceType: "profile", screenName: "kitsilano" }}
      options={{ width: "310", height: "600" }}
    />
  };


  export default KitsilanoLive

  