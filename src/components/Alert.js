import React from 'react'

const captialword=(word)=>
{
  const lower = word.toLowerCase();
  return lower.charAt(0).toUpperCase()+lower.slice(1);
}

export default function Alert(props) {
  return (
   props.alert && <div>
      <div class={`alert alert-${props.alert.type}`} role="alert">
      <strong>{captialword(props.alert.type)}</strong>:{props.alert.message}
      </div>
    </div>
  )
}
