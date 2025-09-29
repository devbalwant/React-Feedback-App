import React, { useContext } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext'

const ListItem = ({feedbacks}) => {

  const {dispatch}=useContext(FeedbackContext)
  const handleRemove=(id)=>{
    dispatch({
      type:"REMOVE_FEEDBACK",
      payload: id
    })
  }
  const handleEdit=()=>{
  dispatch({
    type:"EDIT_FEEDBACK",
    payload : feedbacks
  })
  }




  return (
     <li className={feedbacks.rating > 3 ? 'relative my-2 border border-gray-200 bg-[#A376A2] p-2 rounded-md shadow-lg': feedbacks.rating >=2 ? 'relative my-2 border border-gray-200 bg-[#A376A2] p-2 rounded-md shadow-lg':'relative my-2 border border-gray-200 bg-[#8D5F8C] p-2 rounded-md shadow-lg' }>
              <h1 className='text-xl font-bold my-2'>Rating : {feedbacks.rating}</h1>
              <p className='text-sm text-gray-500 my-2'>Review : {feedbacks.review}</p>
              <div className="absolute top-3 right-3">
                <button onClick={()=>handleEdit()} className='text-white bg-yellow-500 mx-1 hover:bg-yellow-600 p-1.5 rounded-md cursor-pointer'>
                    <FaEdit/>
                </button>
                <button onClick={()=>handleRemove(feedbacks.id)} className='text-white bg-red-500 mx-1 hover:bg-red-600 p-1.5 rounded-md cursor-pointer'>
                    <FaTrash/>
                </button>
              </div>
            </li>
  )
}

export default ListItem