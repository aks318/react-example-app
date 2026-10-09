import { List } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import NavItems from "./NavItems";

const navData = [
  {
    id: "001",
    title: "Introduction",
  },
  {
    id: "002",
    title: "Contents",
    child: [
      {
        id: "002a",
        title: "Part 1",
      },
      {
        id: "002b",
        title: "Part 2",
      },
      {
        id: "002c",
        title: "Part 3",
        child: [
          {
            id: "002c-a",
            title: "Content 4",
          },
        ],
      },
    ],
  },
  {
    id: "003",
    title: "Reviews",
    child: [
      {
        id: "003a",
        title: "Review 1",
      },
      {
        id: "003b",
        title: "Review 2",
      },
    ],
  },
  {
    id: "004",
    title: "Contact Us",
  },
];

const SideMap = () => {
  return (
    <div>
      <List>
        {navData.map((item) =>
          item.child ? (
            <Navbar key={item.id} {...item} />
          ) : (
            <NavItems key={item.id} {...item} />
          )
        )}
      </List>
    </div>
  );
};

export default SideMap;
