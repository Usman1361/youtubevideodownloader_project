import React from "react";
import GetLink from "./(components)/GetLink/GetLink";
import Guides from "./(components)/Guides/Guides";
import { Box, Fade } from "@mui/material";
const page = () => {
  return (
    <>
      <GetLink />
      <Guides />
    </>
  );
};

export default page;
