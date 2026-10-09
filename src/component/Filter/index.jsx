import React, { useEffect, useState } from "react";

const data = {
  0: {
    _id: "0",
    name: "Item0",
    country: "country00",
    category: 0,
  },
  1: {
    _id: "1",
    name: "Item1",
    country: "country01",
    category: 1,
  },
  2: {
    _id: "2",
    name: "Item2",
    country: "country02",
    category: 2,
  },
  3: {
    _id: "3",
    name: "Item3",
    country: "country03",
    category: 3,
  },
};

const Filter = () => {
  const [stateData, setStateData] = useState(data);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (inputValue.length) {
      const filterData = Object.values(data).filter((v) => {
        console.log(data, inputValue);
        if (
          v.name.includes(inputValue) ||
          v.country.includes(inputValue) ||
          v.category.toString().includes(inputValue)
        ) {
          return true;
        } else return false;
      });
      const updatedData = filterData.reduce((acc, curr) => {
        acc[curr.category] = curr;
        return acc;
      }, {});

      setStateData(updatedData);
    } else setStateData(data);
  }, [inputValue]);

  return (
    <div>
      Filter
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      <ul>
        {Object.keys(stateData).map((key) => (
          <li key={key}>
            {stateData[key].name},{stateData[key].country},
            {stateData[key].category},
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
