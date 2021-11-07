import { useState } from "react";
import CSS from 'csstype';

const TextareaCustom = () => {

const [experiment, setExperiment] = useState<any[]>([])

const handleChange = (evt: any) => {  
    
    const contentEdit = require('content-edit');    

const el = document.getElementById("textarea");
              
                    setExperiment(evt.currentTarget.innerHTML)
             if ( evt.currentTarget.textContent.length !== 0 && evt.currentTarget.textContent.length % 5 === 0) {
                    const afterLineBreak: any = <div style={afterLineBreakElementStyle}>.</div>;
                 
                      console.log("match!");  
                      let newArr: any[] = [evt.currentTarget.textContent];
                      newArr.push(afterLineBreak);                      
                      contentEdit.placeCaretAtEnd(el);
                      setExperiment(newArr)                  
                      console.log(experiment);  
            };  

// setExperiment(evt.currentTarget.innerHTML);
contentEdit.placeCaretAtEnd(el);
}; 

    return <div id="textarea" style={textareaStyle}  contentEditable="true" suppressContentEditableWarning={true} 
     onInput={handleChange}> 
       {experiment}
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
};