import addShoppingCart from "../../assets/images/addShoppingCart.svg"
import { size, variants, bgColors } from '../styleComponents/options'
import {  Hover } from "../styleComponents/ButtonStyles.jsx"
import Button from "../Button/Button"
import { Section, Article, Div } from "../styleComponents/StyledSection"
import InteractiveButton from "../interactiveButtons/InteractiveButton.jsx" 
import { ButtonStyle } from "../styleComponents/ButtonStyles.jsx"
const MARGINTOP = 3;
const IteractiveButton = ({ elements = [], min}) => {

    return <Section $min={min}>
        {
            elements.map(button => button)
        }
    </Section>
}
const SingleButton = ({ element, text,alignSelf,marginTop }) => {
    return <Div $alignSelf={alignSelf} $marginTop={marginTop}>
        {text && <h3>{text}</h3>}
        {element}
    </Div>
}


const ButtonHover = ({ variant, bgColor, text, htext, alignSelf, halignSelf, marginTop, hmarginTop, child = "default"}) => {

    return <Section>
        <Div $alignSelf={alignSelf} $marginTop={marginTop}>
            {text && <h3>{text}</h3>}
            <Button variant={variant} color={bgColor} hover={false}>{child}</Button>

        </Div>
        <Div $alignSelf={halignSelf} $marginTop={hmarginTop}>
        {htext && <h3>{htext}</h3>}
            <Hover $variant={variant} $color={bgColor}>{child}</Hover>
        </Div>

    </Section>
}

const disabled = <Section $display={"block"}><Button disabled/></Section>
const disableShadow = <Section $display={"block"}><Button color={bgColors.primary} disableShadow hover={false}>default</Button></Section>

const startIcon = <Button startIcon={addShoppingCart} color={bgColors.primary} hover={false} />
const endIcon = <Button endIcon={addShoppingCart} color={bgColors.primary} hover={false} />

const sm = <Button size={size.sm} color={bgColors.primary} hover={false}>default</Button>
const md = <Button size={size.md} color={bgColors.primary} hover={false}>default</Button>
const lg = <Button size={size.lg} color={bgColors.primary} hover={false}>default</Button>

const buttonSize = [
    {element:sm, text:'<Button size="sm"' },  
    {element:md, text:'<Button size="md"'},    
    {element:lg, text:'<Button size="lg"'}      
].map((props)=> <SingleButton key={`buttonSize-${props.text}`} {...props}/>)

const buttonColors = [
    {text:"<Button />", htext: "&:hover &:focus", hmarginTop: "3" },  
    {bgColor:bgColors.primary, text: '<Button color="primary"/>', child: "Primary", halignSelf: "end"},    
    {bgColor:bgColors.secondary,text:'<Button color="secondary"/>', child:"Secondary", halignSelf:"end"},    
    {bgColor:bgColors.danger,text:'<Button color="danger"/>', child:"Danger", halignSelf:"end"},    
   
].map((props) => <ButtonHover key={`buttonColors-${props.text}`} {...props} />)

const iconsButton = [    
    {element:startIcon, text:'<Button startIcon="local_grocery_store">' },
    {element:endIcon , text:'<Button endIcon="local_grocery_store">'},
].map((props)=> <SingleButton key={props.text} {...props}/>)

export function Buttons() {

    return <>        
        <InteractiveButton />
              
        <ButtonHover text={"<Button />"} htext={"&:hover &:focus"}/>
        <ButtonHover variant={variants.outline} text={'<Button variant="outline"/>'} htext={"&:hover &:focus"}/>
        <ButtonHover variant={variants.text} text={'<Button variant="text"/>'} htext={"&:hover &:focus"} />

        <SingleButton element={disabled} text={"<Button disabled/>"}  marginTop={MARGINTOP}/>
        <SingleButton element={disableShadow} text={"<Button disableShadow/>"} marginTop={MARGINTOP} />

        <IteractiveButton elements={iconsButton} />
        <IteractiveButton elements={buttonSize} />
        <IteractiveButton elements={buttonColors} min={15} />
       
    </>
}
// Una función que toma un texto con formato de atributo y valor y lo convierte en un objeto JavaScript





