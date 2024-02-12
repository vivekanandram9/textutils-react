import React, {useState} from 'react'



export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "success")
  }
  const handleLoClick = ()=>{
    console.log("lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleOnChange = (event)=>{
    console.log("onChange");
    setText(event.target.value);
  }
  const handlePrClick = (event)=>{
    var printwin = window.open("");
    printwin.document.write(document.getElementById("myBox").innerHTML);
    printwin.stop();
    printwin.print();
    printwin.close();
  }
  const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  
  const [text, setText]= useState('');

  return (
    <>
    <div className='container' style={{color:props.mode === 'dark' ? 'white':'black'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
           
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark' ? '#13466e':'white' , color:props.mode === 'dark' ? 'white':'black'} } id="myBox" rows="8"></textarea> {/*important*/}
        </div>
        <button disabled ={text.length===0} className="btn btn-primary" onClick={handleUpClick}>Convert to upperCase </button>
        <button disabled ={text.length===0} className="btn btn-primary" onClick={handleLoClick}>Convert to lowercase </button>
        <button disabled ={text.length===0} className="btn btn-primary" onClick={handlePrClick}>Print </button>
        <button disabled ={text.length===0} className="btn btn-primary" onClick={handleCopy}>copy </button>
    </div>
    <div className="container my-3"  style={{color:props.mode === 'dark' ? 'white':'black'}}>
      <h2>your Text summary</h2>
      <p>{ text.split(/\s+/).filter((element)=>{return element.length!==0},{/*important*/}).length} words and {text.length} characters </p> {/*counting words and characters*/}
      <p>{0.008 *  text.split(" ").filter((element)=>{return element.length!==0} )} Minutes read</p> {/*time for reading the text*/}
      <h2> Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>

    </div>
    

    </>
  )
}
