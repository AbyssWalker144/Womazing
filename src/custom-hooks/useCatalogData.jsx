import { useEffect, useState } from "react";
import firebase from "../utils/firebase-config";

const useCatalogData = (fieldName, id) => {
  const [data, setData] = useState("");

  useEffect(() => {
    if (id) {
      // Fetch data for a specific product
      const ref = firebase.database().ref(fieldName);
      ref.orderByChild("id").equalTo(id).once("value")
        .then(snapshot => {
          const data = snapshot.val();
          console.log(data);
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      // Fetch all data
      firebase
        .database()
        .ref(fieldName)
        .once("value")
        .then((snapshot) => setData(snapshot.val()))
        .catch((error) => {
          console.error(error);
        });
    }
  }, [fieldName, id]);

  return data;
};

export default useCatalogData;