import React, { useContext } from 'react'
import PostItem from './postItem/PostItem'
import { ContextData } from '../../../App';
import './Posts.css'
function Posts() {
    const { data  } = useContext(ContextData);
  return (
    <div>
        <div className="postsProfile">
            {data.map(item=> <PostItem {...item}/>)}
        </div>
    </div>
  )
}

export default Posts