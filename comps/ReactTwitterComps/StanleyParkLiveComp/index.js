import React from "react";
import { Timeline } from 'react-twitter-widgets'

export const StanleyParkLive = ({

}) => {
    return <Timeline
      dataSource={{ sourceType: "profile", screenName: "stanleyparkeco" }}
      options={{ width: "310", height: "600" }}
    />
  };


  export default StanleyParkLive

  