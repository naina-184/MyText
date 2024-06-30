import React, {useState} from 'react'


export default function Textform(props) {
    const handelUpClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showalert("Converted to Upper Case!", "Success")
    }
    const handelLoClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showalert("Converted to Lower Case!", "Success")
    }
    const handelclearClick = () =>{
        let newtext = ('');
        setText(newtext)
        props.showalert("Your text has been cleared", "Success")
    }

    const handelinverseClick = () =>{
        let newtext = ('');
        for(let i=text.length; i>=0; i--){
            newtext += text[i];
        }
        setText(newtext)
        props.showalert("Inversed!", "Success")
    }
   
    const handelparaClick = () =>{
        let newtext = text.toLowerCase();
        setText( newtext.charAt(0).toUpperCase() + newtext.slice(1));
        props.showalert("Changed into perfect paragraph!", "Success")
    
    }

    const handelcopyClick = () =>{
        // console.log("I am Copy")
        // var text = document.getElementById("myBox");
        // text.select();
        // text.setSelctionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showalert("Copy to Clipboard", "Success");
    
    }

    const handelOnChange = (event) =>{
        console.log("OnChange ");
        setText(event.target.value);
    }


    const [text, setText] = useState('');
    return (
    <>
        <div className='Container Container-muted' style={{color: props.mode === 'dark'?'white':'#04667a'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                    {/* <label for="myBox" class="form-label">Example Textarea</label> */}
            <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-info mx-2  my-1" onClick={handelUpClick}>Upper case</button>
            <button className="btn btn-info mx-2 my-1" onClick={handelLoClick}>Lower case</button>
            <button className="btn btn-info mx-2 my-1" onClick={handelclearClick}>clear</button>
            <button className="btn btn-info mx-2 my-1" onClick={handelinverseClick}>Inverse text</button>
            <button className="btn btn-info mx-2 my-1" onClick={handelparaClick}>Paragraph</button>
            <button className="btn btn-info mx-2 my-1" onClick={handelcopyClick}>Copy</button>
        </div>
        <div className='container2 my-3'  style={{color: props.mode === 'dark'?'white':'#04667a'}} >
            <h2>Your text Summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and  {text.length} characters</p>
            <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Mintues to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
    </>    
    )
}
