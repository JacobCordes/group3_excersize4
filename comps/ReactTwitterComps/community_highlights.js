import React from "react";
import { Timeline } from 'react-twitter-widgets'

export const ProfileSmaller = ({

}) => {
    return <Timeline
      dataSource={{ sourceType: "profile", screenName: "cityofvancouver" }}
      options={{ width: "310", height: "600" }}
    />
  };


  export default ProfileSmaller

  