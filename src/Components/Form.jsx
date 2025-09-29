import React, { useContext, useEffect, useState } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const Form = () => {

  const {dispatch,edit}=useContext(FeedbackContext)

  const [rating ,setRating]=useState("")
  const [review ,setReview]=useState("")

  const handleSubmit=(e)=>{
    e.preventDefault()
    !edit.isEdit?
    dispatch({
      type : "ADD_FEEDBACK",
      payload : {id : crypto.randomUUID(),rating,review}
    }):
    dispatch({
      type : "UPDATE_FEEDBACK",
      payload : {id : edit.feedback.id,rating,review}
    })

    setRating("")
    setReview("")
  }

  useEffect(()=>{
    setRating(edit.feedback.rating)
    setReview(edit.feedback.review)
  },[edit])


  return (
   <div className="border border-gray-200 shadow-lg rounded-md p-4 my-6">
            <form onSubmit={(e)=>handleSubmit(e)}>
              <label htmlFor="rating">Please select Your Rating :</label>
              <select value={rating} onChange={(e)=>setRating(e.target.value)} required name="rating" id="rating" className="border border-gray-300 rounded-md p-2 w-full my-2">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <label  htmlFor="rating">Please Enter Your Review :</label>
              <textarea value={review} onChange={(e)=>setReview(e.target.value)} className='border border-gray-300 p-2 rounded-md w-full my-2' required name="review" id="review"></textarea>
               <button  className='my-2 w-full rounded-md bg-[#A376A2] hover:bg-[#6B3F69] cursor-pointer text-white font-semibold py-2 px-4'>Submit Review</button>
            </form>
          </div>
  )
}

export default Form