import React, {useState} from 'react'

export default function DarkMode() {
    const[mystyle,setMode]=useState({
        color: "black",
        backgroundColor: "white",
    });
    const[h1,seth1]=useState('Dark Mode');

    const kl12=()=>{
        if(mystyle.color=="black")
        {
            setMode({
                color: "white",
                backgroundColor: "black",
            });
            seth1('Light Mode');
        }
        else
        {
            setMode({
                color: "black",
                backgroundColor: "white",
            });
            seth1('Dark Mode');
        }
    }

  return (
    <div>
      <>
      <div className="container my-3" style={mystyle}>
      <div className="input-group mb-3">
  <div className="input-group-prepend"  >
    <span className="input-group-text" style={mystyle} id="basic-addon1">@ </span>
  </div>
  <input type="text" className="form-control" style={mystyle} aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div className="input-group mb-3">
  <input type="text" className="form-control"style={mystyle} aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <div className="input-group-append" >
    <span className="input-group-text" style={mystyle} id="basic-addon2">@example.com</span>
  </div>
</div>

<label for="basic-url">Your vanity URL</label>
<div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text"style={mystyle} id="basic-addon3">https://example.com/users/</span>
  </div>
  <input type="text" className="form-control" style={mystyle}id="basic-url" aria-describedby="basic-addon3"/>
</div>

<div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text" style={mystyle}>$</span>
  </div>
  <input type="text" className="form-control"style={mystyle} aria-label="Amount (to the nearest dollar)"/>
  <div className="input-group-append">
    <span className="input-group-text" style={mystyle}>.00</span>
  </div>
</div>

<div className="input-group">
  <div className="input-group-prepend">
    <span className="input-group-text"style={mystyle}>With textarea</span>
  </div>
  <textarea className="form-control" style={mystyle} aria-label="With textarea"></textarea>
</div>
<div className="containder my-3 mx-3">
<button type="button" onClick={kl12} className="btn btn-success">{h1}</button>
</div>
</div>
      </>
    </div>
  )
}
