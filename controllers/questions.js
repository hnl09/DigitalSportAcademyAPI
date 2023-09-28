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

const collectionName = 'questions';

export const getQuestions = async (req, res) => { 
    try {
        const questions = collection(db, collectionName);
        const q = query(questions);
        const snapshot = await getDocs(q);
        const questionsData = snapshot.docs.map(doc => doc.data());
        res.send(questionsData);
    } catch (error) {
        res.status(500).send(errorMsg);
        console.error('Error fetching questions:', error);
    }
}