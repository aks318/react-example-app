import React from "react";
// import { useCountry } from "aakash-country";
import useHalfClicked from "../../Hooks/useHalfClicked";
// import { useHalfClicked } from "customs-hooks";

const Country = () => {
  // const { loading, country, error } = useCountry("India");
  // const windoSize = useWindowSize();
  // console.log({ windoSize });
  const { halfClicked, HalfWrapper } = useHalfClicked();
  console.log({ halfClicked });
  return (
    <HalfWrapper>
      <div
        style={{ width: "100px", height: "50px", border: "1px solid black" }}
      ></div>
    </HalfWrapper>
  );
};

export default Country;
