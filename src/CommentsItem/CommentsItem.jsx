import React from 'react'
import { ButtonElement, Commentscontainer } from './CommentsItem.Styled';

const CommentsItem = ({propName, fullarray,index}) => {
 
   console.log("name",propName.name,fullarray,index);

  return (
    <div>
     <Commentscontainer>
        <div style={{
        display:"flex",flexDirection:"row",gap:"10px",marginTop:"10px"
        }}>
     
        
        </div>
        
        </Commentscontainer> 
    </div>
  )
}

export default CommentsItem
