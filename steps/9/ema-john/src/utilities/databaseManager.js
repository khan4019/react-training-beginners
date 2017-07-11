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


const getDataKey = () => {
    const userId = getUser();
    return `emaJohn/carts/${userId}`
}

// push to local storage: a temporary place for database
const getDatabaseCart = () => {
    const dataKey = getDataKey();
    const data = localStorage.getItem(dataKey) || "{}";
    console.log(data);
    return JSON.parse(data);
}

const addToDatabaseCart = (key, count) => {
    const currentCart = getDatabaseCart();
    currentCart[key] = count;
    localStorage.setItem(getDataKey(), JSON.stringify(currentCart));
}

const removeItem = firebaseKey => {
    const cartRef = getDataKey();
    cartRef.child(firebaseKey).remove();
}

const processOrder = (cart) => {
    const cartRef = getDataKey();
    cartRef.remove();
}

export {addToDatabaseCart, getDatabaseCart, removeItem, processOrder};