import { List, ListItem } from "@mui/material";
import React, { useState } from "react";
import Nesting from "./Nesting";
import NavItems from "./NavItems";

function Navbar({ title, child }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen((prev) => !prev);
  return (
    <div style={{ paddingLeft: "12px" }} onClick={handleOpen}>
      <ListItem>{title}</ListItem>
      {isOpen ? (
        <List>
          {child.map((item) =>
            item.child ? (
              <Nesting key={item.id} {...item} />
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
}

export default Navbar;
