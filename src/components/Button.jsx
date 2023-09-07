import { ButtonStyle } from "./styleComponents/ButtonStyles.jsx"

export const iconButton = ({startIcon, endIcon, text = "default"}) => {
    
    const start = (
        <div className='flex'>
            <img className="image" src={startIcon}></img>
            {text}
        </div>
    )
    const end = (
        <div className='flex'>
            {text}
            <img src={endIcon}></img>
        </div>
    )
    if (startIcon)
        return start
    else
        return end
}


export default function Button({ variant, startIcon, endIcon, size, color, disabled = false, disableShadow = false, hover = true, text = "default" }) {
    if (disabled && disableShadow) {
        
        return <ButtonStyle $variant={variant} $size={size} $color={color} $disableshadow $disabled>{text}</ButtonStyle>

    } else
        if (disabled) {
            return <ButtonStyle $variant={variant} $size={size} $color={color} $disabled>{text}</ButtonStyle>

        } else
            if (disableShadow) {

                if (hover)
                    return <ButtonStyle $variant={variant} $size={size} $color={color} $disableshadow $hover>{text}</ButtonStyle>
                else
                    return <ButtonStyle $variant={variant} $size={size} $color={color} $disableshadow>{text}</ButtonStyle>

            } if (startIcon || endIcon) {               
                let child;
                if (startIcon)
                    child = iconButton({startIcon, text})
                else
                    child = iconButton({endIcon, text})

                if (hover) {
                    return <ButtonStyle $variant={variant} $size={size} $color={color} $hover>{child}</ButtonStyle>
                }
                else {
                    return <ButtonStyle $variant={variant} $size={size} $color={color}>{child}</ButtonStyle>
                }

            }

    else
        if (hover)
            return <ButtonStyle $variant={variant} $size={size} $color={color} $hover>{text}</ButtonStyle>
        else
            return <ButtonStyle $variant={variant} $size={size} $color={color}>{text}</ButtonStyle>

}