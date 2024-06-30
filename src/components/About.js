import React from 'react'

export default function About(props) {


    // const [myStyle, setmyStyle] = useState(  {
    //     color: 'white',
    //     backgroundColor: 'black'
    // })


    let myStyle = {
        color: props.mode ==='dark'?'white':'#042743',
        backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white', 
    }

  
    // const [btntext, setBtnText] = useState('Enable Light Mode')
    // const ToggleStyle = () =>{
    //     if(myStyle.color === 'white'){
    //         setmyStyle({
    //              color: 'black',
    //             backgroundColor: 'white'
                
    //         })
    //         setBtnText("Enable Light mode")
    //     }
    //     else{
    //         setmyStyle({
    //         color: 'white',
    //         backgroundColor: 'black',
    //         border: '1px solid white'
    //     })
    //     }
    //     setBtnText("Enable Dark mode")
    // }

  return (
      <div className='container' style={{color: props.mode ==='dark'?'white':'#042743'}}>
        <h2 className='my-3'>About Us</h2>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" style={myStyle}data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Analyze your app
                </button>
            </h2>
        <div id="collapseOne" className="accordion-collapse collapse show " data-bs-parent="#accordionExample" >
            <div className="accordion-body"style={myStyle} >
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
        </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                    Free to use
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
                <div className="accordion-body" style={myStyle}>
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
            </div>
        </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" style={myStyle}aria-controls="collapseThree">
                       compatibilty 
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
                    <div className="accordion-body" >
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                 </div>
            </div>
        </div>
        {/* <div className='container my-3'>
            <button type='button' onClick={ToggleStyle} className=' btn btn-primary'>{btntext}</button>
        </div> */}
    </div>
  )
}

