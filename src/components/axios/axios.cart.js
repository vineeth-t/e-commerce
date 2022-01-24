import axios from "axios";
import { API } from "./axios.setup";

export async function getCartItemsFromDB(dispatch) {
  try {
    const { data: { response, cartItems } } = await axios.get(`${API}/cart`)
    if (response) {
      dispatch({ type: 'SET_CART_ITEMS', payload: cartItems })
    } else {
      dispatch({ type: 'TOAST', toast: 'Internal Server Error, Refresh' })
    }

  } catch (error) {
    console.error(error);
  }
}
export async function addToCart(productId, dispatch) {
  try {
    const { data: { response, cartItems } } = await axios.post(`${API}/cart/`, { productId })
    if (response) {
      dispatch({ type: 'SET_CART_ITEMS', payload: cartItems, toast: 'Added to Cart' })
    } else {
      dispatch({ type: 'TOAST', toast: 'Internal Server Error, Refresh' })
    }
  } catch (error) {
    console.log(error)
  }
}
export async function removeFromCart(productId, dispatch) {
  try {
    const { data: { response, cartItems } } = await axios.post(`${API}/cart/`, { productId, flag: 'DELETE' })
    if (response) {
      dispatch({ type: 'SET_CART_ITEMS', payload: cartItems, toast: 'Removed From Cart' })
    } else {
      dispatch({ type: 'TOAST', toast: 'Internal Server Error, Refresh' })
    }
  } catch (error) {
    console.log(error)
  }
}
export async function incrementQuantity(productId, dispatch) {
  try {
    const { data: { response, cartItems } } = await axios.post(`${API}/cart`, { productId, flag: 'INC' })
    if (response) {
      dispatch({ type: 'SET_CART_ITEMS', payload: cartItems })
    } else {
      dispatch({ type: 'TOAST', toast: 'Internal Server Error, Refresh' })
    }
  } catch (error) {
    console.log(error)
  }
}
export async function decrementQuantity(productId, dispatch) {
  try {
    const { data: { response, cartItems } } = await axios.post(`${API}/cart`, { productId, flag: 'DEC' })
    if (response) {
      dispatch({ type: 'SET_CART_ITEMS', payload: cartItems })
    } else {
      dispatch({ type: 'TOAST', toast: 'Internal Server Error, Refresh' })
    }
  } catch (error) {
    console.log(error)
  }
}