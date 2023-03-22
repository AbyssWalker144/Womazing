import { useEffect, useState} from "react";
import firebase from "../utils/firebase-config";

const useCatalogData = (fieldName) => {

    const [data, setData] = useState('');

    useEffect(() => {
        firebase
            .database()
            .ref()
            .child(fieldName)
            .once('value')
            .then(data => setData(data.val()))
    }, [fieldName]);


    return data;
}

export default useCatalogData;