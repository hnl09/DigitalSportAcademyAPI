import { db } from "../firebase.js"
import { getFirestore, collection, addDoc, doc, setDoc, getDocs, query, where, updateDoc, orderBy, limit, getDoc } from "firebase/firestore";

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

export const getQuestionById = async (req, res) => {
    const { id } = req.params
    try {
        const docRef = doc(db, collectionName, id)
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            let questionData = docSnap.data()
            res.send(questionData)
        } else {
            res.send("Document does not exist")
        }
    } catch (error) {
        res.status(500).send(errorMsg);
        console.error('Error fetching question:', error);
    }
}

export const createQuestions = async (req, res) => {
    try {
      const questions = req.body;
  
      for (const question of questions) {
        await addDoc(collection(db, collectionName), question);
      }
  
      res.status(201).json({ message: 'Questions added successfully' });
    } catch (error) {
      console.error('Error adding questions:', error);
      res.status(500).json({ error: 'Failed to add questions' });
    }
  };