import { getAuth } from 'firebase/auth';
import { collection, doc, getFirestore, setDoc } from 'firebase/firestore';

export const createPost = async ({ photos, location, text }) => {
  const { uid, displayName, photoURL } = getAuth().currentUser;
  const collectionRef = collection(getFirestore(), 'posts');
  const documentRef = doc(collectionRef);
  const id = documentRef.id;
  await setDoc(documentRef, {
    id,
    photos,
    location,
    text,
    user: { uid, displayName, photoURL },
    createdTs: Date.now(),
  });
};
