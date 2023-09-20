import React, { useContext } from 'react'
import { ContextData } from '../../../App';
import SavedPost from './savedPosts/SavedPost';

function Saved() {
  const { savedData  } = useContext(ContextData);
  return (
    <div>
        <div className="postsProfile">
            {savedData.map(item=> <SavedPost {...item}/>)}
        </div>
    </div>
  )
}

export default Saved