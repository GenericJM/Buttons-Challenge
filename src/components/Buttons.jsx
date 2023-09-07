import addShoppingCart from "../assets/images/addShoppingCart.svg"
import { size, variants, bgColors } from './styleComponents/options'
import {  Hover } from "./styleComponents/ButtonStyles.jsx"
import Button from "./Button"
import { Section,Article, Div } from "./styleComponents/StyledSection"
const IteractiveButton = ({ elements = [], min}) => {

    return <Section $min={min}>
        {
            elements.map(button => button)
        }
    </Section>
}
const SingleButton = ({ element, text,alignSelf,marginTop }) => {
    return <Div $alignSelf={alignSelf} $marginTop={marginTop}>
        {text ? <h3>{text}</h3> : null}
        {element}
    </Div>
}


const ButtonHover = ({ variant, bgColor, text, htext, alignSelf, halignSelf, marginTop, hmarginTop, child = "default" }) => {

    return <Article>
        <Div $alignSelf={alignSelf} $marginTop={marginTop}>
            {text ? <h3>{text}</h3> : null}
            <Button variant={variant} color={bgColor} hover={false}>{child}</Button>

        </Div>
        <Div $alignSelf={halignSelf} $marginTop={hmarginTop}>
        {htext ? <h3>{htext}</h3> : null}
            <Hover $variant={variant} $color={bgColor}>{child}</Hover>
        </Div>

    </Article>
}

const disabled = <Button disabled/>
const disableShadow = <Button color={bgColors.primary} disableShadow hover={false}>default</Button>

const startIcon = <Button startIcon={addShoppingCart} color={bgColors.primary} hover={false} />
const endIcon = <Button endIcon={addShoppingCart} color={bgColors.primary} hover={false} />

const sm = <Button size={size.sm} color={bgColors.primary} hover={false}>default</Button>
const md = <Button size={size.md} color={bgColors.primary} hover={false}>default</Button>
const lg = <Button size={size.lg} color={bgColors.primary} hover={false}>default</Button>

const buttonSize = [
    <SingleButton key={"sm"} element={sm} text={'<Button size="sm"'} />,
    <SingleButton key={"md"} element={md} text={'<Button size="md"'} />,
    <SingleButton key={"lg"} element={lg} text={'<Button size="lg"'} />,
]

const buttonColors = [
    <ButtonHover key={"defaultColor"} text={"<Button />"} htext={"&:hover &:focus"}  hmarginTop={"3"}/>,
    <ButtonHover key={"primarytColor"} bgColor={bgColors.primary} text={'<Button color="primary"/>'} child={"Primary"} halignSelf={"end"} />,
    <ButtonHover key={"secondarytColor"} bgColor={bgColors.secondary} text={'<Button color="secondary"/>'} child={"Secondary"} halignSelf={"end"} />,
    <ButtonHover key={"dangertColor"} bgColor={bgColors.danger} text={'<Button color="danger"/>'} child={"danger"} halignSelf={"end"} />,
]

const iconsButton = [
    
    <SingleButton key={"startIcon"} element={startIcon} text={'<Button startIcon="local_grocery_store">'} />,
    <SingleButton key={"endIcon"} element={endIcon} text={'<Button endIcon="local_grocery_store">'} />
]

export function Buttons({ variant, startIcon }) {

    return <section>        
        {/* <Button variant="text" /> */}
        <Button startIcon={addShoppingCart} color={bgColors.primary}/>
        <ButtonHover text={"<Button />"} htext={"&:hover &:focus"}/>
        <ButtonHover variant={variants.outline} text={'<Button variant="outline"/>'} htext={"&:hover &:focus"}/>
        <ButtonHover variant={variants.text} text={'<Button variant="text"/>'} htext={"&:hover &:focus"} />

        <SingleButton element={disabled} text={"<Button disabled/>"} marginTop={"1"} />
        <SingleButton element={disableShadow} text={"<Button disableShadow/>"} marginTop={"1"}/>

        <IteractiveButton elements={iconsButton} />
        <IteractiveButton elements={buttonSize} />
        <IteractiveButton elements={buttonColors} min={15} />


    </section>
}


