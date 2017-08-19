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


const getDatabaseId = () => {
    const userId = getUser();
    return `emaJohn/carts/${userId}`
}

// push to local storage: a temporary place for database
const getDatabaseCart = () => {
    const databaseId = getDatabaseId();
    const data = localStorage.getItem(databaseId) || "{}";
    return JSON.parse(data);
}

const addToDatabaseCart = (id, count) => {
    const currentCart = getDatabaseCart();
    currentCart[id] = count;
    localStorage.setItem(getDatabaseId(), JSON.stringify(currentCart));
}

const removeFromDatabaseCart = id => {
    const currentCart = getDatabaseCart();
    delete currentCart[id];
    localStorage.setItem(getDatabaseId(), JSON.stringify(currentCart));
}

const processOrder = (cart) => {
    localStorage.removeItem(getDatabaseId());
}


export { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, processOrder };


// polyfill to support older browser
const localStorage = window.localStorage || (() => {
  let store = {}
  return {
    getItem(key) {
      return store[key]
    },
    setItem(key, value) {
      store[key] = value.toString()
    },
    clear() {
      store = {}
    }
  };
})()

const sessionStorage = window.sessionStorage || (() => {
  let store = {}
  return {
    getItem(key) {
      return store[key]
    },
    setItem(key, value) {
      store[key] = value.toString()
    },
    clear() {
      store = {}
    }
  };
})()
// end of poly fill