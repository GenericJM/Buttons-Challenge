import styled, {css}  from "styled-components"

const grid = css`
  grid-template-columns: repeat(auto-fill, minmax(${prop => prop.$min < 25 || prop.$min > 25 ? `${prop.$min}em` : "25em"}, 1fr));
`
const flex = css`
  flex-direction:${prop=>prop.$direction || "column"};
`
const margin = css`
  margin-top:${prop => prop.$marginTop > 0 ? `${prop.$marginTop}em`:"1.5em"};   
  
`
const display = css`
  display: ${prop => prop.$display || "grid"};  
  ${prop => prop.$display || grid};
  ${prop => prop.$display==="flex" ? flex:""};
  
`
export const Section = styled.section`
  ${display}
  ${margin}
`
export const Article = styled.article`
   ${grid};
   ${margin} ;
   
`
export const Div = styled.div`
  align-self:${prop => prop.$alignSelf || "none"}; 
  ${margin} ;

`



