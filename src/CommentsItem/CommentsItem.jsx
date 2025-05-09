import React, { useState } from "react";
import { ButtonElement, Commentscontainer } from "./CommentsItem.Styled";

const CommentsItem = ({ propName, fullarray, index,setdata }) => {
  // const [cards, setcards] = useState(fullarray);
  const deleteFunction = () => {
    let filtered = fullarray.filter((each) => each.id !== propName.id);
    setdata(filtered)
  };
  return (
    <div>
      <Commentscontainer>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            <div>{propName.name}</div>
            <div>{propName.comment}</div>
            <div>
              <img src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png" />
              <span>LIKE</span>
            </div>
          </div>
          <div onClick={deleteFunction}>
            <img src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png" />
          </div>
        </div>
      </Commentscontainer>
    </div>
  );
};

export default CommentsItem;
