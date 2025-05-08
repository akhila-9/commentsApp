import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html,
body {
    padding: 0;
    margin: 0;
    height:100vh;
    width:100vw;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}
* {
    box-sizing: border-box;
}
`;
export const TotalContainer =styled.div`
 
    display: flex
;    height: 100px;
    align-items: center;
    /* justify-content: center; */
    flex-direction: row;
    gap: 20px;
`
export const HeadingStyles=styled.div`
    color:blue;
    font-family:"Roboto";
    font-weight:bold;
    font-size:30px;

`
export const ImagesStyles=styled.img`
    height:150px;
    width:150px;
`
export const ParagraphStyles=styled.div`
    color:#000;
    font-size:18px;
    font-family:"Roboto";
`
export const NameInputElement=styled.input`
    height:30px;
    width:260px;
    border-radius:10px;
`
export const CommentInputElement=styled.textarea`
    height:88px;
    width:260px;
    text-align:start;
    border-radius:10px;
    resize:none;
`
export const ButtonElement=styled.div`
    background-color:blue;
    color: #ffffff;
    text-align: center;
    background-color: blue;
    height: 25px;
    width: 110px;
    
`