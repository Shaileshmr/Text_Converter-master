import React, {useState}from 'react'

export default function Textform1(props) {

    const changehere=(event)=>{
        settext(event.target.value);
    }

    function countword(text){
      const arr = text.split(' ');
      return arr.filter(word => word !== '').length;
    }

    const reversingString=()=>{
      const arrayStrings = text.split("");
      const reversingArray = arrayStrings.reverse();
      const joinArray = reversingArray.join("");
      settext(joinArray);
      props.showAlert(" Converted to Reverse order","success");
  }

    const changeupper=()=>{
        let newtext = text.toUpperCase();
        settext(newtext);
        props.showAlert(" Converted to UpperCase","success");
    }

    const changelower=()=>{
        let newtext = text.toLowerCase();
        settext(newtext);
        props.showAlert("  Converted to LowerCase","success");
    }

    const clearr=()=>{
        let newtext = '';
        settext(newtext);
        props.showAlert(" Clear all text","danger");
    }
    const removeextra=()=>{
      let newtext = text.replace(/\s+/g, ' ').trim();
      settext(newtext);
      props.showAlert(" Removed all extra spaces","success");
    }
    
    const[text, settext] = useState('');

  return (
    <div>
      <>
        <div className={`container text-${props.mode==='light'?'dark':'light'}`} >
      <div className="mb-3">
     <label htmlFor="exampleFormControlTextarea1" className="form-label"><h1>ENTER YOUR TEXT</h1></label>
     <textarea className="form-control" style={{background:props.mode==='dark'?'#343a40':'white', color:props.mode==='dark'?'white':'black'}} value={text} onChange={changehere}  id="exampleFormControlTextarea1" rows="8"></textarea>
     <div className="container my-3">
     &nbsp;  &nbsp;
     <button type="button" className="btn btn-primary" onClick={changeupper}>UpperCase</button>
     &nbsp;  &nbsp;
     <button type="button" className="btn btn-primary" onClick={changelower}>LowerCase</button>
     &nbsp;  &nbsp;
     <button type="button" className="btn btn-primary" onClick={removeextra}>Remove Extra Spaces</button>
     &nbsp;  &nbsp;
     <button type="button" className="btn btn-primary"onClick={reversingString}>Reverse</button>
     
     &nbsp;  &nbsp;
     <button type="button" className="btn btn-primary" onClick={clearr}>Clear</button>
     <div className="container my-3">
      
     Total Character: {text.length}
     &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;
     Total Words: {countword(text)}
     &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;   
     Minutes read: {0.008*countword(text)}
     </div>
     </div>
     </div>
     </div>
      </>
    </div>
  )
}
