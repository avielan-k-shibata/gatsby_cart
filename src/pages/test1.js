import React from "react"
// import firebase from "gatsby-plugin-firebase"

export default () => {
  // firebase
  //   .firestore()
  //   .collection("user")
  //   // .document("user")
  //   .add({
  //     name: "Heineken",
  //     mail: "test",
  //     address: "aitiken",
  //   })
  //   .then(ref => {
  //     console.log("Added document with ID: ", ref.id)
  //   })

  return (
    <div>
      <h1>Firestore CRUD App </h1>
      <h2>Item List</h2>
      <h2>Add Item</h2>
    </div>
  )
}