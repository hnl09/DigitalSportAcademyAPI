import {
    db
} from "../firebase.js"
import {
    getFirestore,
    collection,
    addDoc,
    doc,
    setDoc,
    getDocs,
    query,
    where,
    updateDoc,
    orderBy,
    limit,
    getDoc
} from "firebase/firestore";

const errorMsg = 'Error, try again in a few minutes or contact a developer for more details.'

const collectionName = 'participantes';

export const getCustomers = async (req, res) => {
    try {
        const users = collection(db, collectionName);
        const q = query(users);
        const snapshot = await getDocs(q);
        const usersData = snapshot.docs.map(doc => doc.data());
        res.send(usersData);
    } catch (error) {
        res.status(500).send(errorMsg);
        console.error('Error fetching customers:', error);
    }
}

export const getCustomerById = async (req, res) => {
    const {
        id
    } = req.params
    try {
        const docRef = doc(db, collectionName, id)
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            res.send(docSnap.data())
        } else {
            res.send("Document does not exist")
        }
    } catch (error) {
        res.status(500).send(errorMsg);
        console.error('Error fetching customer:', error);
    }
}