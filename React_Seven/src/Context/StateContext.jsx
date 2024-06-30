import { createContext, useContext, useReducer } from "react";

const StateContext = createContext();

export const StateContextProvider = ({children}) => {
    const initialState = {
        count : 0,
        value : 100,
      };
    
      const reducer = (state, action) => {
        switch (action.type) {
          case "increase":
            return{ ...state,count : state.count + 1};
          case "decrease" :
            return {...state,count : state.count - action.payload};
          case "reset" :
            return {...state,count : 0};
          case "increase by value":
              return{...state,value : state.value + 100};
          case "reset by value" :
              return{...state,value : 100};
          default:
            return state;
        }
      };
      const [state, dispatch] = useReducer(reducer, initialState);
    const data = {state,dispatch}
    return(
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
}

export const StateContextCustom = () => useContext(StateContext)