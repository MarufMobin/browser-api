const displayCart = () =>{
    const carts = getCart();
    for( const product in carts){
        displayProduct(product)
    }
};
const addItem = () =>{
   const inputField = document.getElementById('product-name');
   const inputValue = inputField.value;

    // validation empty field
    if( !inputValue ){
        return;
    }

   displayProduct(inputValue)
    // display in the ui
    
    addProductToCart(inputValue)
    // add to local Storage


   inputField.value = '';
}

const displayProduct = (name) =>{
    const productContainer = document.getElementById('products');
   const productItems = document.createElement("li");
    // if( name !== ''){
    //     productItems.innerText = name;
    //     productContainer.appendChild(productItems)
    // }else{
    //     alert('please Input a valid Value')
    // }
    productItems.innerText = name;
    productContainer.appendChild(productItems)
};

const  getCart = () =>{
    const cart = localStorage.getItem('cart');
   let cartObj;
    if( cart ){
    cartObj = JSON.parse(cart);
   }
   else{
       cartObj = {};
   }
   return cartObj;
}

const addProductToCart = name =>{
    const cart = getCart();
    if(cart[name]){
        cart[name] += 1;
    }else{
        cart[name] = 1;
    }
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringify); 
};


const placeOrder = () =>{
    document.getElementById('products').innerHTML = '';
    localStorage.removeItem('cart');
}
displayCart();
