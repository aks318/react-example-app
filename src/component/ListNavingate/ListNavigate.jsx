import React, { useEffect, useRef } from "react";

const userList = [
  {
    id: 1,
    name: "Akash",
  },
  {
    id: 2,
    name: "Hritik",
  },
  {
    id: 3,
    name: "Kartik",
  },
];
const ListNavigate = () => {
  const listRef = useRef([]);

  useEffect(() => {
    if (listRef[0]) {
      listRef[0].focus();
    }
  }, []);

  const handlekeyDown = (e, index) => {
    // if (e.keyCode === 40) {
    //   if (index === userList.length - 1) listRef[0].focus();
    //   else listRef[index + 1].focus();
    // } else if (e.keyCode === 38) {
    //   if (index === 0) listRef[userList.length - 1].focus();
    //   else listRef[index - 1].focus();
    // }
    if (e.keyCode === 40) listRef[(index + 1) % userList.length].focus();
    else if (e.keyCode === 38)
      listRef[(index - 1 + userList.length) % userList.length].focus();
  };

  return (
    <div>
      <p>Users</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          alignItems: "center",
        }}
      >
        {userList.map((user, index) => (
          <button
            key={user.id}
            ref={(el) => (listRef[index] = el)}
            style={{
              width: "150px",
              height: "40px",
              backgroundColor: "yellow",
            }}
            onKeyDown={(e) => handlekeyDown(e, index)}
          >
            {user.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ListNavigate;
