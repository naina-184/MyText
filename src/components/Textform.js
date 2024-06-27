import React, {useState} from 'react'


export default function Textform(props) {
    const handelUpClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    const handelLoClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newtext = text.toLowerCase();
        setText(newtext)
    }
    const handelclearClick = () =>{
        let newtext = ('');
        setText(newtext)
    }

    const handelinverseClick = () =>{
        let newtext = ('');
        for(let i=text.length; i>=0; i--){
            newtext += text[i];
        }
        setText(newtext)
    }

    const handelOnChange = (event) =>{
        console.log("OnChange ");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (
    <>
        <div className='Container Container-muted'>
            <h1>{props.heading} </h1>
            <div class="mb-3">
                    {/* <label for="myBox" class="form-label">Example Textarea</label> */}
                    <textarea className="form-control" value={text} onChange={handelOnChange} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handelUpClick}>Upper case</button>
            <button className="btn btn-primary mx-2" onClick={handelLoClick}>Lower case</button>
            <button className="btn btn-primary mx-2" onClick={handelclearClick}>clear</button>
            <button className="btn btn-primary mx-2" onClick={handelinverseClick}>Inverse text</button>
       
        </div>
        <div className='container2 my-3' >
            <h2>Your text Summary</h2>
            <p>{text.split(" ").length} words and  {text.length} characters</p>
            <p> {0.008 * text.split("").length}Mintues to read</p>
        </div>
        <h2>Preview</h2>
        <p>{text}</p>
    </>    
    )
}
