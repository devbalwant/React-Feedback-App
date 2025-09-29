import React, { useContext } from 'react'
import ListItem from './ListItem'
import FeedbackContext from '../context/FeedbackContext'

const ListGroup = () => {
    const {feedbacks}=useContext(FeedbackContext)
  return (
        <ul className='my-6'>
           {
            feedbacks.map(feedbacks=> <ListItem key={feedbacks.id} feedbacks={feedbacks}/>)
           }
          </ul>
  )
}

export default ListGroup