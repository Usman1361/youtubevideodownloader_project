import React from "react";
import Header from "./(components)/Header/Header";
import GetLink from "./(components)/GetLink/GetLink";
import Guides from "./(components)/Guides/Guides";
import Footer from "./(components)/Footer/Footer";
const page = () => {
  return (
    <>
      <Header />
      <GetLink />
      <Guides />
      <Footer />
    </>
  );
};

export default page;
