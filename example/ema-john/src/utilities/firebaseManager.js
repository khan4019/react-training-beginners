import firebase from 'firebase';  

const getUser = () => {
    const existingUser = sessionStorage.getItem('userId');
    if (existingUser) {
        return existingUser; 
    } else {
        const newUser = 'user-' + new Date().getTime();
        sessionStorage.setItem('userId', newUser)
        return newUser;
    }
}

// init database
const init = () => {
    var config = {
        apiKey: "AIzaSyDeS_Zc0zmi4_VO6O-BYidZwOa6a2W6y5c",
        authDomain: "react-test-8a4f2.firebaseapp.com",
        databaseURL: "https://react-test-8a4f2.firebaseio.com",
        // projectId: "react-test-8a4f2",
        // storageBucket: "react-test-8a4f2.appspot.com",
        // messagingSenderId: "31182436657"
    };
    firebase.initializeApp(config);
}

const getCartRef = () => {
    const userId = getUser();
    const dbLocation = `emaJohn/carts/${userId}`
    return firebase.database().ref(dbLocation);
}

// push to firebase
const addToFirebaseCart = (key, count) => {
    const cartRef = getCartRef();
    cartRef.child(key).set(count);
}

const getCart = () => {
    const cartRef = getCartRef();
    return cartRef.once('value').then(snapshot => snapshot.val());
}

const removeItem = firebaseKey => {
    const cartRef = getCartRef();
    cartRef.child(firebaseKey).remove();
}

const processOrder = (cart) => {
    const cartRef = getCartRef();
    cartRef.remove();
}

export {addToFirebaseCart, getCart, removeItem, processOrder};