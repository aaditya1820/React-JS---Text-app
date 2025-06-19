import React , {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = () =>                         //Handle uppercase click event
    {
        //console.log("Uppercase was clicked" , +text);
        let newText = text.toUpperCase();               //JavaScript UpperCase logic
        setText(newText)
         props.showAlert("Converted to Uppercase !!", "success");
    }



const handleLoClick = () =>                         //Handle lowercase click event
    {
        //console.log("Uppercase was clicked" , +text);
        let newText = text.toLowerCase();               //JavaScript Lowercase logic
        setText(newText)
        props.showAlert("Converted to Lowercase !!", "success");
    }



const handleClearClick = () =>                         //Handle clear click event
    {
        let newText = '';                     //JavaScript clear logic
        setText(newText)
        props.showAlert("Chat cleared !!", "success");
    }



      const handleRemoveSpacesClick = () =>                  // Handle remove spaces click event
      {
        let newText = text.replace(/\s+/g, '');            // JavaScript logic to remove all spaces
        setText(newText);
        props.showAlert("Spaces removed from the chat !!", "success");
      }



const handleCopy = () => {                                                    //copy function
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }



const handleReverseTextClick = () =>                   // Handle reverse text click event
{
    let newText = text.split('').reverse().join('');   // JavaScript logic to reverse text
    setText(newText);
    props.showAlert("Text Reversed!!", "success");
}



    const handleOnChange = (event) =>                   //Handle click event
    {
       // console.log("On change");
        setText(event.target.value)
    }

    
    const [text , setText] = useState('Enter text here !! ');       //handle state


    //handleOnChange method to enable writing in textbox. 
  return (
    <>
    <div className="container" style={{color:props.mode === 'dark'? 'white': '#262e45'}}>
        <h1>{props.heading}</h1>

       <div className="mb-3">
        <textarea className="form-control" 
            value={text} onChange={handleOnChange} 
            style={{backgroundColor:props.mode === 'dark'? '#233d62': 'white' , color : props.mode === 'dark'? 'white': '#262e45'}} 
            id="myBox" rows="8">
        </textarea>   
       </div>

          <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to uppercase</button>
          <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to lowercase</button>
          <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
          <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
          <button className="btn btn-primary mx-2 my-1" onClick={handleRemoveSpacesClick}>Remove Space</button>
          <button className="btn btn-primary mx-2 my-1" onClick={handleReverseTextClick}>Reverse</button>
     </div>

    <div className="container my-4" style={{color:props.mode === 'dark'? 'white': '#262e45'}}>
      <h1>Your text summary</h1>

      <div>
  <p>
    {
      text.split(/\s+/).filter((element) =>{return element.length !== 0}).length
    } words and {text.length} characters
  </p>
  <p>
  </p>
</div>


      <p>{0.008*text.split(" ").filter((element) =>{return element.length !== 0}).length}Minutes to read </p>
      <p></p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview !!"}</p>
    </div>
    </>
  )
}
