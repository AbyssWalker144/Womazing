import { useEffect, useState } from "react";
import firebase from "../utils/firebase-config";

const useCatalogData = (fieldName, id) => {
  const [data, setData] = useState("");

  useEffect(() => {
    if (id) {
        console.log(id);
        console.log(fieldName);
      // Fetch data for a specific product
      firebase
        .database()
        .ref(`${fieldName}/${id}`)
        .once("value")
        .then((snapshot) => setData(snapshot.val()))
        .catch((error) => {
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