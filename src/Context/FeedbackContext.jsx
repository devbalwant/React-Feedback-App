import { createContext, useReducer } from "react";
import { feedbackReducer } from "./FeedbackReducer";

const FeedbackContext=createContext()

export const FeedbackProvider =({children})=>{
    
    const initialState ={
        feedbacks:[
        // {
        //     id: 1,
        //     rating: 5,
        //     review : "Very Nice Product"
        // }
    ],
        edit:{
            feedback:{},
            isEdit: false
        }
    }



   const [state , dispatch]=useReducer(feedbackReducer,initialState)
    return(
        <FeedbackContext.Provider value={{...state,dispatch}}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext