import React from 'react'
import { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState('Srikant Pradhan');
    const convertToUpper = () => {
        let str = text;
        str = str.toUpperCase();
        setText(str);
    }
    const convertToLower = () => {
        let str = text.toLowerCase();
        setText(str);
    }
    const changeTextArea = (event) => {
        setText(event.target.value);
    }
    const clearTextArea = () => {
        setText('');
    }
    const removeWhiteSpaces = ()=>{
        let newtext = text.split(/\s+/);
        setText(newtext.join(" "));
    }
    return (
        <> <div style={{color:props.theme==='dark'?'black':'white'}}>
            <div className="mb-3">
                <h2>{props.title}</h2>
                <textarea className="form-control" value={text} style={{backgroundColor:props.theme==='dark'?'darkgray':'white',
                color:props.theme==='dark'?'white':'black'}}
                 onChange={changeTextArea} id="exampleFormControlTextarea1" rows="8" ></textarea>
                <button type="button" disabled={text.length===0} onClick={convertToUpper} className="btn btn-primary my-3 mx-2">ToUpperCase</button>
                <button type="button" disabled={text.length===0} onClick={convertToLower} className="btn btn-primary my-3 mx-2">ToLowerCase</button>
                <button type="button" disabled={text.length===0} onClick={clearTextArea} className="btn btn-primary my-3 mx-2">ClearTextArea</button>
                <button type="button" onClick={removeWhiteSpaces} className="btn btn-primary my-3 mx-2">RemoveExtraSpaces</button>
            </div>
            <div className="container my-1">
                <h4>Text Summary...</h4>
                <p><b>{text.split(/\s+/).filter((e)=>e!=='').length}</b> words & <b>{text.length}</b> characters. It wil take <b>{text.split(" ").filter((e)=>e!=='').length * 0.008} minutes to read.</b></p>
                <h4>Preview...</h4>
                <p>{text}</p>
            </div>
            </div>
        </>

    )
}
