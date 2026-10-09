import { List, ListItem } from "@mui/material";
import React, { useState } from "react";
import NavItems from "./NavItems";
import Navbar from "./Navbar";

const Nesting = ({ title, child }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (e) => {
    setIsOpen((prev) => !prev);
    e.stopPropagation();
  };
  return (
    <div style={{ paddingLeft: "12px" }} onClick={handleOpen}>
      <ListItem>{title}</ListItem>
      {isOpen ? (
        <List>
          {child.map((item) =>
            item.child ? (
              <Navbar key={item.id} {...item} />
            ) : (
              <NavItems key={item.id} {...item} />
            )
          )}
        </List>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Nesting;
