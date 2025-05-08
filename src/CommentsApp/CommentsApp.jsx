import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  ButtonElement,
  CommentInputElement,
  HeadingStyles,
  ImagesStyles,
  NameInputElement,
  ParagraphStyles,
  TotalContainer,
} from "./CommentsApp.Styled";
import CommentsItem from "../CommentsItem/CommentsItem";

const CommentsApp = () => {
  const [name, setname] = useState("");
  const [comment, setcomment] = useState("");
  const [data, setdata] = useState([]);
  const nameInputFunction = (e) => {
    setname(e.target.value);
  };
  const nameCommentFunction = (e) => {
    setcomment(e.target.value);
  };
  const clickFunc = () => {
    let array = [...data];

    let obj = { id: uuidv4(), name: name, comment: comment };
    array.push(obj);
    setdata(array);
  };
  useEffect(() => {
    console.log(data);
  }, [data]);
  const keyfunction = (e) => {
    if (e.key === "Enter") {
      clickFunc();
    }
  };
  return (
    <>
      <div style={{ borderBottom: "1px solid grey" }}>
        <TotalContainer>
          <div style={{ height: "400px", width: "330px" }}>
            <div
              style={{ display: "flex", gap: "10px", flexDirection: "column" }}
            >
              <HeadingStyles>Comments</HeadingStyles>
              <ParagraphStyles>say more about 4.0 technologies</ParagraphStyles>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <NameInputElement
                type={"text"}
                placeholder={"Enter Name"}
                onChange={nameInputFunction}
              />
              <CommentInputElement
                type={"text"}
                placeholder={"Enter Comment"}
                onChange={nameCommentFunction}
                onKeyDown={keyfunction}
              />
              <ButtonElement onClick={clickFunc}>Add Comment</ButtonElement>
            </div>
          </div>
          <div style={{ height: "300px", width: "330px" }}>
            <ImagesStyles
              src={
                "https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              }
            />
          </div>
        </TotalContainer>
      </div>
      <ButtonElement>{data.length}</ButtonElement>
      <div> Comments</div>
      {data.map((object,index,array) => (
  <CommentsItem  propName={object} index={index} fullarray={array}/>
))}
     
    </>
  );
};

export default CommentsApp;
