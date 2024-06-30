import {createSlice} from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

const initialState = {
    cartItems : [],
    totalAmount : 0,
    quantity : 0
}

const STORAGE_KEY = "cartItems"

const storedItems = Cookies.get(STORAGE_KEY)

if(storedItems){
    initialState.cartItems = JSON.parse(storedItems)
    initialState.totalAmount = calculateTotalAmount(initialState.cartItems);
    initialState.quantity = calculateQuantity(initialState.cartItems)
}

function calculateTotalAmount (cartItems) {
    return cartItems.reduce((total,item) => total + item.price,0)
}

function calculateQuantity (cartItems) {
    return cartItems.reduce((total,item) => total + item.quantity,0)
}

export const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        addtoCart : (state,{payload}) => {
            const isExisted =state.cartItems.find(item => item.id === payload.id)
            if(isExisted){
                return state;
            }else{

                state.cartItems = [...state.cartItems,{...payload,quantity : 1}]
            }
            // state.totalAmount += payload.price
            // state.quantity++
            state.totalAmount += calculateTotalAmount(state.cartItems)
            state.quantity += calculateQuantity(state.cartItems)
            Cookies.set(STORAGE_KEY,JSON.stringify(state.cartItems))
        },
        removeFromCart : (state,{payload}) => {
            state.cartItems = state.cartItems.filter(item => item.id !== payload.id)
            // state.totalAmount -= payload.price * payload.quantity
            // state.quantity--
            state.totalAmount += calculateTotalAmount(state.cartItems)
            state.quantity += calculateQuantity(state.cartItems)
            Cookies.set(STORAGE_KEY,JSON.stringify(state.cartItems))
        },
        addItemsQuantity : (state,{payload}) => {
            state.cartItems = state.cartItems.map(item => {
                if(item.id === payload.id){
                    return{...item, quantity : item.quantity + 1}
                }else{
                    return item
                }
            })
            // state.quantity ++
            // state.totalAmount += payload.price
            state.totalAmount += calculateTotalAmount(state.cartItems)
            state.quantity += calculateQuantity(state.cartItems)
            Cookies.set(STORAGE_KEY,JSON.stringify(state.cartItems))
        },
        substractItemQuantity : (state,{payload}) => {
            const subItem = state.cartItems.find(item => item.id === payload.id)
            state.cartItems = state.cartItems.map(item => {
                if(subItem.quantity > 1 ){
                    if(item.id === payload.id) {
                        return {...item, quantity : item.quantity - 1}
                    }else{
                        return subItem
                    }
                }  
                state.quantity --
                state.totalAmount -= payload.price     
            })
           
        }
    }
})

export const {addtoCart,removeFromCart,addItemsQuantity,substractItemQuantity} = cartSlice.actions
export default cartSlice.reducer