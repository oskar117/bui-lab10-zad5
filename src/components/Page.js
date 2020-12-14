import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import Browsers from "./Browsers";

export default function Page({browsers}) {
  return (
    <>
        <Menu/>
        <Browsers browsers={browsers}/>
        <Footer/>
    </>
  );
}