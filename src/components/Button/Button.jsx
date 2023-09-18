import { ButtonStyle } from "../styleComponents/ButtonStyles.jsx"

export const iconButton = ({startIcon, endIcon, text = "default"}) => {
    
    const image = (
        <div className='flex'>
          {startIcon &&  <img className="image" src={startIcon}></img>}
            {text}
          {endIcon &&  <img className="image" src={endIcon}></img>}

        </div>
    )
    return image
}


export default function Button({ variant, startIcon, endIcon, size, color, disabled = false, disableShadow = false, hover = true, text = "default" }) {
    //powered by bing chat (para reducir la longitud del codigo)
    
    const icon = startIcon || endIcon;
    const child = icon ? iconButton({ [startIcon ? "startIcon" : "endIcon"]: icon, text }) : text;
    const props = { $variant: variant, $size: size, $color: color };
   
    if (disabled) props.$disabled = true;        
    if (disableShadow) props.$disableshadow = true;
    if (hover && !disabled) props.$hover = true;
    return <ButtonStyle {...props}>{child}</ButtonStyle>;
   
}