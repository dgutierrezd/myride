import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";

const ClockTime = (props) => {
  useEffect(() => {
    setTimeout(() => {
      if (props.seconds < 60) props.setSeconds(props.seconds + 1);
      else {
        props.setMinutes(props.minutes + 1);
        props.setSeconds(0);
      }
    }, 1000);
  });

  return (
    <Typography component="h1" variant="h4">
      {`${props.minutes}:${props.seconds}`}
    </Typography>
  );
};

export default ClockTime;
