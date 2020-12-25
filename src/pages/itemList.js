import React, { useState, useEffect } from "react";
import firebase from "gatsby-plugin-firebase"

import AddUser from '../components/addUser'
const useItems = () => {
  const [items, setItems] = useState([]); //useState() hook, sets initial state to an empty array
  useEffect(() => {
    firebase
      .firestore() //access firestore
      .collection("user") //access "items" collection
      .onSnapshot(snapshot => {
        //You can "listen" to a document with the onSnapshot() method.
        const listItems = snapshot.docs.map(doc => ({
          //map each document into snapshot
          id: doc.id, //id and data pushed into items array
          ...doc.data() //spread operator merges data to id.
        }));
        setItems(listItems); //items is equal to listItems
      });
  }, []);
  return items;
};

const deleteItem = (id) => {  // 追加
    firebase
      .firestore()
      .collection("user")
      .doc(id)
      .delete()
}

const ItemList = () => {
  const listItem = useItems();
  return (
      <>
    <table className="tg">
      <tbody>
        <tr>
          <td className="tg-ycr8">Name</td>
          <td className="tg-ycr8">Type</td>
          <td className="tg-i81m">Qty</td>
          <td className="tg-a02x">Description</td>
        </tr>
      </tbody>
      {listItem.map(item => (
        <tbody key={item.id}>
          <tr>
            <td className="tg-ycr8">{item.name}</td>
            <td className="tg-ycr8">{item.mail}</td>
            <td className="tg-i81m">{item.address}</td>
            <td className="tg-a02x"><button onClick={() => deleteItem(item.id)}>Delete</button> </td>
          </tr>
        </tbody>
      ))}
    </table>
    <AddUser></AddUser>
    </>
  );
};
export default ItemList;