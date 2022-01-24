import axios from "axios"
import { API } from "./axios.setup"

export async function getproductFromDB(setLoader, dispatch) {
  try {
    const { data: { response, products } } = await axios.get(`${API}/products`)
    if (response) {
      dispatch({ type: 'SET_PRODUCTS', payload: products })
    } else {
      dispatch({ type: 'TOAST', toast: 'Refresh the Page' })
    }

  } catch (error) {
    console.log(error.message)
    dispatch({ type: 'TOAST', toast: error.message })
  } finally {
    setLoader(false)
  }
}
