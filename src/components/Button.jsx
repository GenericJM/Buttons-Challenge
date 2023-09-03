import styled, {css} from 'styled-components'
import addShoppingCart from "../assets/images/addShoppingCart.svg"
const variants = {
    outline: "outline",
    text:"text",
}
const gray = "#e0e0e0"
const darkGray = "#828282"
const black = "#3F3F3F"
const hoverColor = "#AEAEAE"

const outlineortxt = css`
background-color:${props => (props.$variant === variants.outline || props.$variant === variants.text) ? "transparent" : ""};
color: ${props => (props.$variant === variants.outline || (props.$variant === variants.text && !props.$disabled)) ? "#3D5AFE" : ""};
 
`
const text = css`
border: ${props => props.$variant === variants.text ? "none" : ""};
box-shadow: ${props => props.$variant === variants.text ? "none" : ""};
`
const outline = css`
border: ${props => props.$variant === variants.outline ? "1px solid #3D5AFE" : ""};

`
const bgColor = css`
 color:${props => (props.$primary||props.$secondary||props.$danger) ? "#FFF" : ""}; 

 background-color:${props => props.$primary ? "#2962FF" : ""};
 background-color:${props => props.$secondary ? "#455A64": ""}; 
 background-color:${props => props.$danger ? " #D32F2F" : ""}; 
`
export const Button = styled.button`
font-size: 14px;
padding: 0.7em 1.5em;
border-radius: 0.5em;
border: none;
background-color:${gray};
color:${props => props.$disabled ? "#9E9E9E" : black};
box-shadow: ${props => !props.$disableshadow ? "0px 3px 3px #e8e8e8" : "none"};

/*outline || text*/
${outlineortxt}
/*outline || text option disabled*/
${outline}
/*text*/
${text}
/*primary*/
/*size*/
 padding: ${props => props.$size === "sm" ? "0.7em 1.5em" : ""};
 padding: ${props=>props.$size==="md" ? "1em 2em":""};
 padding: ${props=>props.$size==="lg" ? "1.5em 3em":""};
 /*color*/
 ${bgColor}
`
const Hover = styled(Button)`
  background-color:${hoverColor};

  /*outline || text*/
  background-color:${props => (props.$variant === variants.outline || props.$variant === variants.text) ? "rgba(41, 98, 255, 0.10)" : ""};
  border: ${props => props.$variant === variants.outline ? "1px solid #3D5AFE" : ""}; 
  /*colors */
  background-color:${props => props.$primary ? "#0039CB" : ""};
  background-color:${props => props.$secondary ? "#1C313A": ""}; 
  background-color:${props => props.$danger ? "#9A0007" : ""}; 

`;
const Img = styled.img`
color: #fff;
`

const IteractiveButton = ({ elements = []}) => { 
    
    return <section className='grid'>
        {
            elements.map(button=>button)
        }
    </section>
}
const SingleButton = ({ element, text }) => {     
 return   <div>
     {text ? <h3>{text}</h3>:null}
     {element}
    </div>
}

const ButtonHover = ({ variant }) => { 
    
return<article className='grid'>
    <div>
        <h3>{"<Button />"}</h3>
        <Button $variant={variant} $size="sm" >default</Button>
        
    </div>
    <div>
        <h3>{"&:hover &:focus"}</h3>
        <Hover $variant={variant} text="">default</Hover>
    </div>

</article>
}
const disabled = <Button $disabled>default</Button>
const disableShadow = <Button $disableshadow>default</Button>
const iconLefth = (<Button $primary>
    <div className='flex'>
        <Img src={addShoppingCart}></Img>
        default
    </div>
</Button>);
const iconRigth = (<Button $primary>
    <div className='flex'>
        default
        <Img src={addShoppingCart}></Img>
    </div>
</Button>);
 
const iconsButton = [
    <SingleButton key={0} element={iconLefth} text={'<Button startIcon="local_grocery_store">'} />,
<SingleButton key={0} element={iconRigth} text={'<Button endIcon="local_grocery_store">'}/>
]

export default function Buttons({ variant, startIcon}) {      
   
    return <section>        
        <ButtonHover/>
        <ButtonHover variant={variants.outline} />
        <ButtonHover variant={variants.text} />
        
        <SingleButton element={disabled} text={"<Button disabled/>"} />
        <SingleButton element={disableShadow} text={"<Button disableShadow/>"}/>
       
        <IteractiveButton elements={iconsButton}/>
        
    </section>
}


