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

export const getUsers = async (req, res) => {
    try {
        const users = collection(db, collectionName);
        const q = query(users);
        const snapshot = await getDocs(q);
        const usersData = snapshot.docs.map(doc => doc.data());
        res.send(usersData);
    } catch (error) {
        res.status(500).send(errorMsg);
        console.error('Error fetching users:', error);
    }
}

export const getUserById = async (req, res) => {
    const { id } = req.params
    try {
        const docRef = doc(db, collectionName, id)
        const docSnap = await getDoc(docRef);
        res.send(docSnap.data())
    } catch (error) {
        res.status(500).send(errorMsg);
        console.error('Error fetching users:', error);
    }
}