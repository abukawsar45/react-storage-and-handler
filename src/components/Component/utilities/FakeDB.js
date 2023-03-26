// use local storage to manage cart data
const addtoDb = id => {
    const quantity = localStorage.getItem(id);
    let count = 0;
    if (quantity) {
        const newQuantity = +quantity + 1
        localStorage.setItem(id, newQuantity);
        console.log('agei if');
    }
    else{
        localStorage.setItem(id, 1);
        console.log('new item else')    
    }
}

export {addtoDb};