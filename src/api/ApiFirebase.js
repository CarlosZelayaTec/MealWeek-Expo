import { database } from "../firebase/config";
import {
    doc,
    onSnapshot,
    deleteDoc,
    updateDoc,
    collection,
    addDoc,
    query,
    orderBy,
  } from "firebase/firestore";

export const createMeal = async (task) => {
    await addDoc(collection(database, "Meals"), {
        ...task,
        createAt: new Date()
    })
}

export const getMeals = async (setMeals) => {
    const ref = collection(database, 'Meals');
    const q = query(ref, orderBy('createAt', 'desc'));

    const unsuscribe = onSnapshot(q, (querySnapshot) => {
        setMeals(
            querySnapshot.docs.map((x) => ({
                id: x.id,
                title: x.data().title,
                descripcion: x.data().descripcion,
                emoji: x.data().emoji,
                createAt: x.data().createAt
            }))
        )
    })

    return unsuscribe;

}

export const createIngredient = async (ingredients) => {
    await addDoc(collection(database, 'Ingredients'), {
        ...ingredients,
        createAt: new Date(),
    })
}

export const getIngredients = async (setIngredients) => {
    const ref = collection(database, 'Ingredients');
    const q = query(ref, orderBy('title', 'asc'));

    const unsuscribe = onSnapshot(q, querySnapshot => {
        setIngredients(
            querySnapshot.docs.map((x) => ({
                id: x.id,
                title: x.data().title,
                price: x.data().price
            }))
        )
    })
}

export const deleteIngredient = async (id) => {
    const ref = doc(database, "Ingredients", id);
    deleteDoc(ref);
}

export const addShoppingCart = async (cart) => {
    await addDoc(collection(database, "Cart"), {
        ...cart,
        isAlready: false,
        createAt: new Date(),
    })
}

export const getShoppingCart = async (setCart) => {
    const ref = collection(database, 'Cart');
    const q = query(ref, orderBy('createAt', 'desc'));

    const unsuscribe = onSnapshot(q, querySnapshot => {
        setCart(
            querySnapshot.docs.map((x) => ({
                id: x.id,
                title: x.data().title,
                price: x.data().price,
                amount: x.data().amount,
                isAlready: x.data().isAlready
            }))
        )
    })
}