import Cookies from "js-cookie";
import { cookies } from "next/dist/client/components/headers";

const getCartItems=()=>{
    const cartItems=Cookies.get('cartItems');    //check allready stored product in cart
    return cartItems?JSON.parse(cartItems):[];
}

const setCartItems=(cartItems)=>{
    Cookies.set("cartItems",JSON.stringify(cartItems));
}

const addToCart=(product,quantity)=>{
    const cartItems=getCartItems();
    const existingItems=cartItems.find((item)=>item.id===product.id);
    if(existingItems){
        existingItems.qty+=quantity;
    }else{
        cartItems.push({id:product?.id,title:product?.title,price:product?.price,image:product?.thumbnail,qty:quantity})
    }
    setCartItems(cartItems);
}

const removeFromCart=(productId)=>{
    const cartItems=getCartItems().filter((item)=>item.id !==productId);
    setCartItems(cartItems);
}

const updateCartItems=(productId,quantity)=>{
    const cartItems=getCartItems().map((item)=>{
        if(item.id===productId){
            return{...item,qty:quantity}
        }else{
            return item
        }
    });
    setCartItems(cartItems);
};

export {getCartItems,addToCart,removeFromCart,updateCartItems}