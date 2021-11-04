import { useState } from "react";
import CSS from 'csstype';


const TextareaCustom = () => {
   
    const [input, setInput] = useState<any>([]);


    const handleChange = (e: any) => {       
        e.currentTarget.textContent = input;        
    };

    const handleInput = (e: any) => {

        const afterLineBreak = <div style={afterLineBreakElementStyle}>.</div>;

        let newText = e.currentTarget.textContent; 
        
                  if ( e.currentTarget.textContent.length !== 0 && e.currentTarget.textContent.length % 10 === 0) {
                      console.log("match!");         
            };
    
        setInput(newText);
    };
   

    return <div style={textareaStyle}  contentEditable="true" suppressContentEditableWarning={true} onBlur={handleChange}
     onInput={handleInput}>
       
    </div>
};

export default TextareaCustom;

const textareaStyle: CSS.Properties = {
    width: "600px",
    height: "100px", 
    backgroundColor: "#fff", 
    color: "#000", 
    wordWrap: 'break-word', 
    overflowY: 'scroll',
    textAlign: 'initial'
};

const afterLineBreakElementStyle: CSS.Properties = {
    width: '30px',
    height: '30px',
    backgroundColor: 'gold',
    borderRadius: '50%'
}