import React from 'react'

 export default function About(props) {

let myStyle = {
   color: props.mode ==='dark'?'white':'#042743',
  backgroundColor: props.mode ==='dark'?'rgb(33 48 69)':'white', 
}

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}>
            
             Analyze your text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample">
          
            <div className="accordion-body" style={myStyle}>
              <strong>This is a text conversion App!</strong> It is hosted on a
              localhost server.
            </div>
          </div>
        </div>

        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}>
        
             Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample">
          
            <div className="accordion-body" style={myStyle}>
              <strong>You can do all types of text operations.</strong> Like
              addition, division, multiplication, clear, remove space, copy
              text, etc.
            </div>
          </div>
        </div>

        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}>
            
             Browser compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample">
          
            <div className="accordion-body" style={myStyle}>
              <strong>This is a very helpful app.</strong> You can format the
              text using this app faster and easier.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
