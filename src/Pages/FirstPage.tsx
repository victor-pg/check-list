import React from "react";
import { useHistory } from "react-router-dom";
import TypographyTitle from "../Components/TypographyTitle";

const FirstPage: React.FC = () => {
  let history = useHistory();
  
  function handleClick() {
    history.push("/second");
  }
  
  return (
    <>
      <button onClick={handleClick}>go to second page</button>
      <TypographyTitle level={1}>Test page for routing</TypographyTitle>
    </>
  );
};

export default FirstPage;
