import styled, {css} from 'styled-components'
import  { size,variants,bgColors } from './options'
import { colors } from './colors'

const gray = "#e0e0e0"
const darkGray = "#828282"
const black = "#3F3F3F"
const hoverColor = "#AEAEAE"

const disabled = css`
color: ${props => (props.$variant === variants.outline || (props.$variant === variants.text && !props.$disabled)) ? "#3D5AFE" : ""};
color:${props => props.$disabled && "#9E9E9E"};
background: ${props=>(props.$disabled && props.$variant !== variants.text) && gray};  

`
const outlineortxt = css`
background-color:${props => (props.$variant === variants.outline || props.$variant === variants.text) ? "transparent" : ""};
${disabled}
`
const text = css`
border: ${props => props.$variant === variants.text ? "none" : ""};
box-shadow: ${props => props.$variant === variants.text ? "none" : ""};
`
const outline = css`
border: ${props => props.$variant === variants.outline ? "1px solid #3D5AFE" : ""};

`
const bgColor = css`
 color:${props => (props.$color===bgColors.primary||props.$color===bgColors.secondary||props.$color===bgColors.danger) ? "#FFF" : ""}; 

 background-color:${props => props.$color===bgColors.primary ? colors.primary : ""};
 background-color:${props => props.$color===bgColors.secondary ? "#455A64": ""}; 
 background-color:${props => props.$color===bgColors.danger ? " #D32F2F" : ""}; 
`
const hover=css`
 background-color:${hoverColor};
/*outline || text*/
background-color:${props => (props.$variant === variants.outline || props.$variant === variants.text) ? "rgba(41, 98, 255, 0.10)" : ""};
border: ${props => props.$variant === variants.outline ? "1px solid #3D5AFE" : ""}; 
/*colors */
background-color:${props => props.$color===bgColors.primary ? "#0039CB" : ""};
background-color:${props => props.$color===bgColors.secondary ? "#1C313A": ""}; 
background-color:${props => props.$color===bgColors.danger ? "#9A0007" : ""}; 
`
export const ButtonStyle = styled.button`
font-size: 14px;
padding: 0.7em 1.5em;
border-radius: 0.5em;
border: none;
background-color:${props => props.$color || gray};
box-shadow: ${props => !props.$disableshadow ? "0px 3px 3px #e8e8e8" : "none"};

/*outline || text*/
${outlineortxt}
/*outline || text option disabled*/
${outline}
/*text*/
${text}
/*size*/
 padding: ${props => props.$size === size.sm ? "0.7em 1.5em" : ""};
 padding: ${props=>props.$size===size.md ? "1em 2em":""};
 padding: ${props=>props.$size===size.lg ? "1.5em 3em":""};
 /*color*/

 ${bgColor}
 ${disabled}

 &:hover{
   ${props=>(props.$hover && !props.$disabled) ? hover:"" }
 }
`
export const Hover = styled(ButtonStyle)`  
 ${hover}
`





