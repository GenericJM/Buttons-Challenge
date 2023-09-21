import { size, variants, bgColors } from '../styleComponents/options.js'
import {  Hover } from "../styleComponents/ButtonStyles.jsx"
import Button from "../Button/Button"
import { Section, Div } from "../styleComponents/StyledSection"
import InteractiveButton from "../interactiveButtons/InteractiveButton.jsx" 

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
            <Button variant={variant} color={bgColor} hover={false} text={child}/>

        </Div>
        <Div $alignSelf={halignSelf} $marginTop={hmarginTop}>
        {htext && <h3>{htext}</h3>}
            <Hover $variant={variant} $color={bgColor}>{child}</Hover>
        </Div>

    </Section>
}

const disabled = <Button disabled />
const disabledText=<Button variant={variants.text} disabled/>
const disableShadow = <Section $display={"block"}><Button color={bgColors.primary} disableShadow hover={false}>default</Button></Section>

const startIcon = <Button startIcon={"local_grocery_store"} color={bgColors.primary} hover={false} />
const endIcon = <Button endIcon={"local_grocery_store"} color={bgColors.primary} hover={false} />

const sm = <Button size={size.sm} color={bgColors.primary} hover={false}>default</Button>
const md = <Button size={size.md} color={bgColors.primary} hover={false}>default</Button>
const lg = <Button size={size.lg} color={bgColors.primary} hover={false}>default</Button>

const buttonDisabled = [
    {element:disabled,text:'<Button disabled />'},
    {element:disabledText,text:'<Button variant="text" disabled/>'}
].map(props => <SingleButton key={`buttonDisabled-${props.text}`} {...props}/>)
const buttonSize = [
    {element:sm, text:'<Button size="sm" color="primary"'},  
    {element:md, text:'<Button size="md" color="primary"'},    
    {element:lg, text:'<Button size="lg" color="primary"'}      
].map((props)=> <SingleButton key={`buttonSize-${props.text}`} {...props}/>)

const buttonColors = [
    {text:"<Button />", htext: "&:hover &:focus", hmarginTop: "3" },  
    {bgColor:bgColors.primary, text: '<Button color="primary"/>', halignSelf: "end",child:"Primary",},    
    {bgColor:bgColors.secondary,text:'<Button color="secondary"/>', child:"Secondary", halignSelf:"end"},    
    {bgColor:bgColors.danger,text:'<Button color="danger"/>', child:"Danger", halignSelf:"end"},    
   
].map((props) => <ButtonHover key={`buttonColors-${props.text}`} {...props} />)

const iconsButton = [    
    {element:startIcon, text:'<Button startIcon="local_grocery_store" color="primary">' },
    {element:endIcon , text:'<Button endIcon="local_grocery_store" color="primary">'},
].map((props)=> <SingleButton key={props.text} {...props}/>)

export function Buttons() {

    return <>        
        <InteractiveButton />
              
        <ButtonHover text={"<Button />"} htext={"&:hover &:focus"} child='default'/>
        <ButtonHover variant={variants.outline} text={'<Button variant="outline"/>'} htext={"&:hover &:focus"}/>
        <ButtonHover variant={variants.text} text={'<Button variant="text"/>'} htext={"&:hover &:focus"} />

        {/* <SingleButton element={disabled} text={"<Button disabled/>"} marginTop={MARGINTOP} />
        <SingleButton element={disabledText} text={'<Button variant="text" disabled/>'}/> */}
        <IteractiveButton elements={buttonDisabled}/>
        <SingleButton element={disableShadow} text={'<Button color="primary" disableShadow/>'} marginTop={MARGINTOP} />

        <IteractiveButton elements={iconsButton} min={26.5} />
        <IteractiveButton elements={buttonSize} min={19} />
        <IteractiveButton elements={buttonColors} min={15} />
       
    </>
}
// Una función que toma un texto con formato de atributo y valor y lo convierte en un objeto JavaScript





