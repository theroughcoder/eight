import { useReducer } from "react";
import { createContext } from "react";

export const Store = createContext();

const initialState = {
  
  userInfo: 
     localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,

};
function reducer(state, action) {
  switch (action.type) {
  

    // case "USER_SIGNIN": {
    //   localStorage.setItem('userInfo', JSON.stringify(action.payload))
      
    //   return { ...state, userInfo: action.payload };
    // }
    
    case "USER_SIGNUP": {
      localStorage.setItem('userInfo', JSON.stringify(action.payload))
      
      return { ...state, userInfo: action.payload };
    }

    // case "USER_PROFILE_UPDATE": {
    //   localStorage.setItem('userInfo', JSON.stringify(action.payload))
      
    //   return { ...state, userInfo: action.payload };
    // }

    // case "USER_SIGNOUT": {
    //   localStorage.removeItem('userInfo');
    //   localStorage.removeItem('shippingAddress');
    //   localStorage.removeItem('paymentMethod');
     
    //   return { ...state, userInfo: null, cart: {cartItems: [],  shippingAddress: {}, paymentMethod: null} };
    // }

    


    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
