import { useState } from "react"
import { Section } from "../styleComponents/StyledSection";
import Button from "../Button/Button";
import { Input } from "../styleComponents/Input";
import {icons} from "../../resources/icons.js"

function convertToObject(str) {
    let obj = {};    
    let pairs = str.match(/(\w+)=("[^"]+"|\w+)|\w+/g);   
    if(pairs)
        pairs.forEach(pair => {
            let [key, value] = pair.split('=');

            if (!value) {
                obj[pair] = true;

            } else {
                obj[key] = value.replace(/"/g, '');
            }
        });
    return obj;
}
export default function InteractiveButton(props) {
    const [buttonProps, setButtonProps] = useState(props);
    const [inputLength, setInputLength] = useState('color="primary"'.length-1);
   
    const handleInputChange = event => {
        const text = event.target.value;
        const length=text ?text.replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ"\s]/g, '').length:'color="primary"'.length
        setInputLength(length)
        
        const value = convertToObject(text);       
        setButtonProps(value);
    };

    return (
        <Section $display="flex">
            <div>
                <h3>{"<Button "}
                    <Input $width={(inputLength) + "ch"} type="text" placeholder='color="primary"' onChange={handleInputChange} />
                   { "/>"}                
                </h3>               
                
            </div>
            <div>
                <Button {...buttonProps} />
            </div>
        </Section>
    );
}