import React, { useState } from "react"
import firebase from "gatsby-plugin-firebase"


const AddUser = () => {
    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [address, setAddress] = useState(null)
    const onSubmit = e => {
        /* 
        preventDefault is important because it
        prevents the whole page from reloading
        */
        e.preventDefault()
        firebase
          .firestore()
          .collection("user")
          .add({
            name,
            mail,
            address,
          })
          //.then will reset the form to nothing
          .then(() => setName(""), setMail(""), setAddress(''))
      }
  return (
    <form onSubmit={onSubmit}>
<input placeholder="Name"
        value={name ? name : ''}
        name="name"
        /* onChange takes the event and set it to whatever
        is currently in the input. 'e' is equal to the event
        happening. currentTarget.value is what is inputted
         */
        onChange={e => setName(e.currentTarget.value)}
        type="text"
      />
      <input placeholder="Mail"
        value={mail ? mail : ''}
        name="mail"
        onChange={e => setMail(e.currentTarget.value)}
        type="text"
      />
      <input placeholder="Address"
        value={address ? address : ''}
        name="address"
        onChange={e => setAddress(e.currentTarget.value)}
        type="text"
      />
      <button>Submit</button>
    </form>
  )
}
export default AddUser