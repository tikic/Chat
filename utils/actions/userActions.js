import { child, get, getDatabase, ref} from 'firebase/database'

export const getUserData = async(userId) => {
    try {
        const dbRef = ref(getDatabase());
        const userRef = child(dbRef, `users/${userId}`)

        const snapshot = await get(userRef);
        console.log(snapshot);

    } catch (error) {
        
    }
}