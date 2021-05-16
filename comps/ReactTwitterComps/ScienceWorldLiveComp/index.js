import React from "react";
import { Timeline } from 'react-twitter-widgets'

export const ScienceWorldLive = ({

}) => {
    return <Timeline
      dataSource={{ sourceType: "profile", screenName: "scienceworldca" }}
      options={{ width: "310", height: "600" }}
    />
  };


  export default ScienceWorldLive

  