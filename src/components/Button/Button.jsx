import { ButtonStyle } from "../styleComponents/ButtonStyles.jsx"
import { icons } from "../../resources/icons.js"
export const iconButton = ({ startIcon, endIcon, text = "default" }) => {

  const image = (
    <div className='iconFlex'>
      {startIcon && <img className="image" src={icons[startIcon]}></img>}
      {text}
      {endIcon && <img className="image" src={icons[endIcon]}></img>}

    </div>
  )
  return image
}


export default function Button({ variant, startIcon, endIcon, size, color, disabled = false, disableShadow = false, hover = true, text = "default", children }) {
  //powered by bing chat (para reducir la longitud del codigo)

  const icon = startIcon || endIcon;
  text = children || text;

  const child = icon ? iconButton({ [startIcon ? "startIcon" : "endIcon"]: icon, text }) : text;
  const props = { $variant: variant, $size: size, $color: color };

  
  if (disabled) props.$disabled = true;
  if (disableShadow) props.$disableshadow = true;
  if (hover && !disabled) props.$hover = true;
  return <ButtonStyle {...props}>{child}</ButtonStyle>

}