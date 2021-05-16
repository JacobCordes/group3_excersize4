import React from "react";
import { Timeline } from 'react-twitter-widgets'

export const VicFraserLive = ({

}) => {
    return <Timeline
      dataSource={{ sourceType: "profile", screenName: "News1130" }}
      options={{ width: "310", height: "600" }}
    />
  };


  export default VicFraserLive

  