// / use local storage to manage cart data
const addtoDb = id => {
    let shoppingCart ={};
    const storeCart = localStorage.getItem('shopping-cart');
    if (storeCart){
    shoppingCart = JSON.parse(storeCart);
        console.log('first', shoppingCart)
    }
    
    const quantity = shoppingCart[id]
    if (quantity) {
        const newQuantity = + quantity + 1;
        shoppingCart[id] = newQuantity;
        console.log('third', shoppingCart, 'qqqqqqqqqqqqqqqqq', quantity)
    }
    else {
        shoppingCart[id] = 1;
        console.log('four', shoppingCart,'qqqqqqqqqqqqqqqqq', quantity)
    }
    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
}
const removeData = id => {
    const storeCart = localStorage.getItem('shopping-cart');
    if (storeCart) {
        const shoppingCart = JSON.parse(storeCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
    
        }
    }
}

const rmData = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addtoDb,
    removeData,
    rmData
};