import React, { useContext } from 'react'
import {FcLike} from 'react-icons/fc'
import {FaComment} from 'react-icons/fa'
import './PostItem.css'

function PostItem({img}) {
  return (
    <div className='postItemProfile'>
        <img src={img} alt="" />
        <div className='hoverr'>
            <div style={{display:'flex',gap:'5px'}}>
                <p><FcLike style={{fontSize:'18px'}}/></p>
                <p>13</p>
            </div>
            <div style={{display:'flex',gap:'5px'}} >
                <p><FaComment/></p>
                <p>12</p>
            </div>
        </div>
    </div>
  )
}

export default PostItem