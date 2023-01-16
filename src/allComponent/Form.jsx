import React, { useState } from 'react'
import "./FormStyle.css"

const Form = () => {
  const [val, setVal] = useState({
    fName: "",
    eName: "",
    sName: "",
    mName: "",
  })
  const [allEntry, setAllEntry] = useState([]);
  const [fError, setFError] = useState(" ");
  const [eError, setEError] = useState(" ");
  const [sError, setSError] = useState(" ");
  const [mError, setMError] = useState(" ");

  const inputEvent = (e) => {
    const {name, value} = e.target
    setVal((preVal) => {
      return {
        ...preVal, [name]: value
      }
    })
  }

  const formSubmit = (e) => {
    e.preventDefault();
    const newEntry = {fullName: val.fName, email: val.eName, subject: val.sName, message: val.mName }
    if(newEntry.fullName===""){
      setFError("Required this field")
    }
    else if(newEntry.email===""){
      setFError("")
      setEError("Required this field")
    }
    else if(newEntry.subject===""){
      setFError("")
      setEError("")
      setSError("Required this field")
    }
    else if(newEntry.message===""){
      setFError("")
      setEError("")
      setSError("")
      setMError("Required this field")
    }
    else{
      setFError("")
      setEError("")
      setSError("")
      setMError("")
      setAllEntry([...allEntry ,newEntry])
    }
  }
  return (
    <div className='form'>
      <form onSubmit={formSubmit}>
        <label>Your Name</label>
        <input name="fName" value={val.fName} onChange={inputEvent} type="text" />
        <span className='error'>{fError}</span>
        <label>Email</label>
        <input name="eName" value={val.eName} onChange={inputEvent} type="email" />
        <span className='error'>{eError}</span>
        <label>Subject</label>
        <input name="sName" value={val.sName} onChange={inputEvent} type="text" />
        <span className='error'>{sError}</span>
        <label>Message</label>
        <textarea name="mName" value={val.mName} onChange={inputEvent} rows="6" placeholder='Type your message here...'/>
        <span className='error'>{mError}</span>
        <button className="btn">Submit</button>
      </form>
    </div>
  )
}

export default Form
