import React, { useContext } from 'react';
import './Post.css';
import PostItem from './PostItem';
import { ContextData } from '../../App';
import { InfinitySpin } from 'react-loader-spinner'

function Post() {
    const { postDatas, loader } = useContext(ContextData);
    console.log(postDatas, 'postDatas');

    return (
        <div className='post'>
            {loader ? (
                <div style={{ width: '100%', height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                    <InfinitySpin
                        width='200'
                        color="rgb(131,58,180)"
                    />
                </div>
            ) : (
                postDatas.reverse().map((item) => <PostItem key={item.id} {...item} />)
            )}
        </div>
    );
}

export default Post;
