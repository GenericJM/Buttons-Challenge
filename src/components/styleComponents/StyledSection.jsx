import styled, {css}  from "styled-components"

const grid = css`
  display: grid;
  grid-template-columns:${prop => prop.$min<25|| prop.$min>25 ? `repeat(auto-fill, minmax(${prop.$min}em,1fr))` : "repeat(auto-fill, minmax(25em, 1fr))"}; 
`
export const Section = styled.section`
  ${grid}
  margin-top:2em;   
`
export const Article = styled.article`
   ${grid};
  margin-top:2em;   
   
`
export const Div = styled.div`
  align-self:${prop => prop.$alignSelf || "none"};
  margin-top: ${prop => prop.$marginTop > 0 ? `${prop.$marginTop}em`:"1em"};
`



