import { db } from "../firebase.js"
import { getFirestore, collection, addDoc, doc, setDoc, getDocs, query, where, updateDoc, orderBy, limit, getDoc } from "firebase/firestore";

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
    const { id } = req.params
    try {
        const docRef = doc(db, collectionName, id)
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            let customerData = docSnap.data()
            res.send(customerData)
        } else {
            res.send("Document does not exist")
        }
    } catch (error) {
        res.status(500).send(errorMsg);
        console.error('Error fetching customer:', error);
    }
}

export const getCustomerByEmail = async (req, res) => {
    const { email } = req.params
    try {
        const customer = collection(db, 'participantes');
        const q = query(customer, where("email", "==", email));
        const snapshot = await getDocs(q);
        const customerData = snapshot.docs.map(doc => doc.data())[0];
        if (!snapshot.empty) {
            res.send(customerData)
        } else {
            res.send(`User ${email} not found`)
        } 
    } catch (error) {
        res.status(500).send(errorMsg);
        console.error('Error fetching customer:', error);
    }
}