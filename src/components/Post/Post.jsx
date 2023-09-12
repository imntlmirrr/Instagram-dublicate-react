import React, { useContext } from 'react'
import "./Post.css"
import PostItem from './PostItem';
import { ContextData } from '../../App';

function Post() {
    const { postDatas, setPostDatas } = useContext(ContextData)

    return (
        <div className='post'>
            {postDatas.reverse().map(item=>  <PostItem {...item}/> )}
        </div>
    )
}

export default Post